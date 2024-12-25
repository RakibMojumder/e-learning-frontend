"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import { useState } from "react";
import ButtonSpinner from "../ButtonSpinner";
import axios from "axios";

const Otp = ({ userEmail, setStep }) => {
  const [otpValue, setOtpValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const { data: response } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/otp/verify-otp`,
        { email: userEmail, otp: otpValue }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="mb-3 text-sm">
        {userEmail} নাম্বার/ইমেইল পাঠানো 4 সংখ্যার কোডটি লিখুন
      </p>
      <InputOTP
        maxLength={4}
        value={otpValue}
        onChange={(value) => setOtpValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <Button
        onClick={handleSubmit}
        disabled={otpValue.length < 4}
        className="h-11 w-full mt-8 disabled:bg-gray-800 disabled:cursor-not-allowed"
      >
        {isLoading ? <ButtonSpinner /> : "সাবমিট করুন"}
      </Button>
    </div>
  );
};

export default Otp;
