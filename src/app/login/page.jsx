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
  const [userEmail, setUserEmail] = useState("");
  const [step, setStep] = useState("register");

  return (
    <Layout>
      <div className="grid grid-cols-2 items-center py-16">
        <div>
          <div className="max-w-[372px]">
            {step === steps.EMAIL_CHECKING && (
              <EmailCheckingForm
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                setStep={setStep}
              />
            )}
            {step === steps.OTP && (
              <Otp userEmail={userEmail} setStep={setStep} />
            )}
            {step === steps.LOGIN && <Login userEmail={userEmail} />}
            {step === steps.REGISTER && <Register userEmail={userEmail} />}
          </div>
        </div>
        <div>
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
