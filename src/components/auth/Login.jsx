import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { useState } from "react";
import ButtonSpinner from "../ButtonSpinner";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/provider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { password: "" } });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { userEmail, setToken } = useAuthContext();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const { data: response } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login-user`,
        { email: userEmail, password: data.password }
      );

      if (response.success) {
        toast({
          title: "Congratulation.",
          description: response?.message,
        });
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        router.push("/");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.response?.data?.message,
      });
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
        disabled={isLoading}
        className={`h-11 w-full ${isLoading ? "bg-primary/60" : "bg-primary"}`}
      >
        {isLoading ? <ButtonSpinner /> : "সাবমিট করুন"}
      </Button>
    </form>
  );
};

export default Login;
