import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { useState } from "react";
import ButtonSpinner from "../ButtonSpinner";
import { steps } from "@/app/login/page";

const EmailCheckingForm = ({ setUserEmail, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" } });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const { data: response } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/user-exists`,
        data
      );

      setUserEmail(response?.data?.email);
      setStep(response?.data?.isUser ? steps.LOGIN : steps.OTP);
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
        ইমেইল দিয়ে এগিয়ে যান
      </Label>

      <div className="my-6">
        <Input
          type="email"
          id="email"
          placeholder="ইমেইল"
          className="h-10 focus:border-primary"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
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

export default EmailCheckingForm;
