"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import ButtonSpinner from "../ButtonSpinner";
import { useState } from "react";

const Register = ({ userEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: userEmail,
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold md:mb-8 md:text-[21px] text-center">
        আপনার তথ্য দিন
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label>আপনার ইমেইল</Label>
          <Input
            className="h-10 focus:border-primary"
            type="email"
            {...register("email")}
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label>আপনার নাম লিখুন</Label>
          <div>
            <Input
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="h-10 focus:border-primary"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label>পাসওয়ার্ড লিখুন</Label>
          <div>
            <Input
              type="password"
              id="password"
              placeholder="পাসওয়ার্ড "
              className="h-10 focus:border-primary"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label>পাসওয়ার্ড কনফার্ম করুন</Label>
          <div>
            <Input
              type="password"
              placeholder="পাসওয়ার্ড কনফার্ম করুন"
              className="h-10 focus:border-primary"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className={`h-11 w-full ${
            isLoading ? "bg-primary/60" : "bg-primary"
          }`}
        >
          {isLoading ? <ButtonSpinner /> : "সাবমিট করুন"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
