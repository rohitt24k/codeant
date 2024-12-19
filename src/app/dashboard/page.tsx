"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/repositories");
  }, [router]);
  return <div>dashboard</div>;
};

export default Page;
