"use client";

import Heading from "@/lib/typography/Heading";
import LogoWithNameLogo from "@images/common/logo-with-name.svg";
import { Button } from "../Button";
import { useState } from "react";
import Image from "next/image";

interface LoginTabsProps {
  activeTab: number;
  onTabChange: (tab: number) => void;
}

interface SignInProvider {
  name: string;
  logoUrl: string;
}

const SAAS_PROVIDERS: SignInProvider[] = [
  { name: "Github", logoUrl: "/images/common/github-logo.svg" },
  { name: "Bitbucket", logoUrl: "/images/common/bitbucket-logo.svg" },
  { name: "Azure Devops", logoUrl: "/images/common/azure-logo.svg" },
  { name: "GitLab", logoUrl: "/images/common/gitlab-logo.svg" },
];

const SELF_HOSTED_PROVIDERS: SignInProvider[] = [
  { name: "GitLab", logoUrl: "/images/common/gitlab-logo.svg" },
  { name: "SSO", logoUrl: "/images/common/key-logo.svg" },
];

const SignInButton: React.FC<SignInProvider> = ({ name, logoUrl }) => (
  <Button variant="outline" className="max-w-[446px] w-full">
    <Image src={logoUrl} width={24} height={24} alt={name} />
    <p className="ml-4">Sign in with {name}</p>
  </Button>
);

const LoginTabs: React.FC<LoginTabsProps> = ({ activeTab, onTabChange }) => (
  <div className="mt-5 bg-system-white flex rounded-lg overflow-hidden">
    <Button
      variant={activeTab === 1 ? "default" : "ghost"}
      className={`flex-1 ${
        activeTab === 2 ? "-mr-2 rounded-none" : "relative z-10"
      }`}
      onClick={() => onTabChange(1)}
    >
      SAAS
    </Button>
    <Button
      variant={activeTab === 2 ? "default" : "ghost"}
      className={`flex-1 ${
        activeTab === 1 ? "-ml-2 rounded-none" : "relative z-10"
      }`}
      onClick={() => onTabChange(2)}
    >
      Self-Hosted
    </Button>
  </div>
);

const LoginForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const providers = activeTab === 1 ? SAAS_PROVIDERS : SELF_HOSTED_PROVIDERS;

  return (
    <div className="bg-white rounded-xl">
      <div className="px-6 py-9">
        <div className="flex flex-col justify-center">
          <LogoWithNameLogo className="h-10" />
          <Heading className="mt-9 text-center">Welcome to CodeAnt AI</Heading>
        </div>
        <LoginTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <hr />
      <div className="p-6">
        <div className="flex flex-col items-center gap-4">
          {providers.map((provider) => (
            <SignInButton key={provider.name} {...provider} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
