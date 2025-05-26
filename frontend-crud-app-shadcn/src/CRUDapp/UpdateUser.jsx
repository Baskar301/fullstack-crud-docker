import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

function UpdateUser() {
  let navigator = useNavigate();

  const { id } = useParams();
  console.log("ID:", id);

  const [user, setUser] = useState({
    username: "",
    email: "",
    phonenumber: "",
  });

  const { username, email, phonenumber } = user;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/api/users/${id}`);
    setUser(result.data);
    console.log(result.data);
  };

  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !username.trim() || !phonenumber.trim()) {
      toast.error("All fields are required!");
      return;
    }

    await axios.put(`http://localhost:8080/api/users/update/${id}`, user);
    toast.success("User Updated Successfully!");
    navigator("/"); // Navigate to the home
  };

  return (
    <>
      <div className="flex justify-center items-center py-16">
        <Card className="w-[350px] bg-white dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-light tracking-wider">
              Edit User
            </CardTitle>
            <CardDescription className="text-center">
              Fill the below details.
            </CardDescription>
          </CardHeader>
          <form onSubmit={(e) => submit(e)}>
            <CardContent>
              <div className="w-full grid gap-4 items-center">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="username"
                    className="font-light tracking-widest"
                  >
                    Username
                  </Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => onInput(e)}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="font-light tracking-widest">
                    E-mail
                  </Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => onInput(e)}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="phonenumber"
                    className="font-light tracking-widest"
                  >
                    Phonenumber
                  </Label>
                  <Input
                    type="number"
                    placeholder="Phonenumber"
                    name="phonenumber"
                    id="phonenumber"
                    value={phonenumber}
                    onChange={(e) => onInput(e)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="py-5">
              <div className="flex justify-between w-full gap-2">
                <Button type="submit" className="cursor-pointer">
                  Save
                </Button>
                <Button variant="destructive" asChild>
                  <Link to="/">Cancel</Link>
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default UpdateUser;
