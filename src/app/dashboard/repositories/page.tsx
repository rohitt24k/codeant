"use client";

import React, { useState, useMemo } from "react";

import { REPOSITORIES_DATA } from "@/constants/repository";
import Header from "@/components/repositories/RepositoriesHeader";
import RepositoryCard from "@/components/repositories/RepositoryCard";

const RepositoriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepositories = useMemo(
    () =>
      REPOSITORIES_DATA.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const handleRefresh = () => {
    console.log("Refreshing repositories...");
  };

  const handleAddRepository = () => {
    console.log("Adding new repository...");
  };

  return (
    <div className="bg-system-white flex-1 overflow-hidden flex sm:p-6">
      <div className="rounded-xl w-full flex flex-col bg-white shadow ">
        <Header
          totalRepositories={REPOSITORIES_DATA.length}
          onSearch={setSearchQuery}
          onRefresh={handleRefresh}
          onAddRepository={handleAddRepository}
        />
        <div className=" flex-1 overflow-auto new-scrollbar ">
          {filteredRepositories.map((repo) => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoriesPage;
