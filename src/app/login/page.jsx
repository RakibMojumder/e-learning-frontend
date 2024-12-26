"use client";

import AuthPageCarousel from "@/components/auth/AuthPageCarousel";
import EmailCheckingForm from "@/components/auth/EmailCheckingForm";
import Login from "@/components/auth/Login";
import Otp from "@/components/auth/Otp";
import Register from "@/components/auth/Register";
import Layout from "@/components/Layout";
import { useState } from "react";

export const steps = {
  EMAIL_CHECKING: "emailChecking",
  OTP: "otp",
  LOGIN: "login",
  REGISTER: "register",
};

const LoginPage = () => {
  const [step, setStep] = useState(steps.EMAIL_CHECKING);

  return (
    <Layout>
      <div className="grid md:grid-cols-2 items-center py-16 min-h-svh">
        <div>
          <div className="w-full md:max-w-[372px]">
            {step === steps.EMAIL_CHECKING && (
              <EmailCheckingForm setStep={setStep} />
            )}
            {step === steps.OTP && <Otp setStep={setStep} />}
            {step === steps.LOGIN && <Login />}
            {step === steps.REGISTER && <Register />}
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-xl font-bold text-center">
            দৈনিক লাইভ ক্লাসে অংশ নিয়ে বজায় রাখুন রুটিনমাফিক পড়াশোনা
          </p>
          <AuthPageCarousel />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
