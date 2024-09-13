"use client";
import { useState } from "react";
import CustomButton from "./shared/components/ui/custom-button/custom-button";
import UserCard from "./shared/components/home-page/user-card";
import useGetAllUser from "./hooks/use-users";

export default function Home() {
  const { users } = useGetAllUser();
  console.log("users are ", users);
  const [activeTab, setActiveTab] = useState<"admin" | "users">("admin");
  // const numbers = [1, 2, 3, 4, 5];

  // const userType = activeTab === "admin" ? "Admin" : "User";
  // const userEmail = activeTab === "admin" ? "@admin.com" : "User@gmail.com";
  const imgSrc =
    "https://images.pexels.com/photos/23407638/pexels-photo-23407638/free-photo-of-narrow-street-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="p-4 text-center mt-2 max-w-[20rem] mx-auto">
      <h1 className="mb-4 text-[1.2rem]">Display All Users</h1>
      <div className="flex gap-4 justify-center mb-4">
        <CustomButton
          onClick={() => setActiveTab("admin")}
          className={`rounded-sm ${
            activeTab === "admin" && "bg-[#000] text-[#fff]"
          } `}
        >
          Admin
        </CustomButton>
        <CustomButton
          onClick={() => setActiveTab("users")}
          className={`rounded-sm ${
            activeTab === "users" && "bg-[#000] text-[#fff]"
          }`}
        >
          Users
        </CustomButton>
      </div>

      <div className="max-h-[90vh] overflow-auto">
        {(activeTab === "admin" || activeTab === "users") &&
          users[activeTab]?.map((user) => (
            <UserCard
              key={user?.id}
              name={user?.name}
              email={`${user?.jobTitle}`}
              imgSrc={imgSrc}
              className="shadow-md border cursor-pointer"
            />
          ))}
      </div>
    </div>
  );
}
