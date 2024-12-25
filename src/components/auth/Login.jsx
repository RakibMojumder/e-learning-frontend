import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { useState } from "react";
import ButtonSpinner from "../ButtonSpinner";

const Login = ({ userEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { password: "" } });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const { data: response } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/user-exists`,
        { email: userEmail, password: data.password }
      );

      console.log(response);
    } catch (error) {
      console.error("Error checking user existence:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full items-center">
      <Label
        htmlFor="email"
        className="w-full text-lg font-semibold md:mb-5 md:text-[21px]"
      >
        পাসওয়ার্ড দিয়ে এগিয়ে যান
      </Label>

      <div className="my-6">
        <Input
          type="password"
          id="password"
          placeholder="পাসওয়ার্ড "
          className="h-10 focus:border-primary"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className={`h-11 w-full ${isLoading ? "bg-primary/60" : "bg-primary"}`}
      >
        {isLoading ? <ButtonSpinner /> : "সাবমিট করুন"}
      </Button>
    </form>
  );
};

export default Login;
