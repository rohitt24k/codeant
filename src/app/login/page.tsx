import React from "react";
import LogoIcon from "@images/common/logo.svg";
import { IssuesCard, StatsOverview } from "@/components/login/Cards";
import LoginForm from "@/components/login/LoginForm";

const LoginPage: React.FC = () => (
  <div className="h-screen flex">
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block self-center mx-auto">
        <StatsOverview />
        <IssuesCard />
        <LogoIcon className="fixed left-0 bottom-0 w-[284px] text-[#cdcdcd]" />
      </div>
      <div className="bg-system-white px-6 flex items-center justify-center">
        <div className="w-full">
          <LoginForm />
          <p className="text-center mt-8">
            By signing up you agree to the{" "}
            <span className="font-bold">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
