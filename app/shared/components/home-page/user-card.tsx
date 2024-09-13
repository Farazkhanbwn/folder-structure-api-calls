import React, { FC } from "react";
import PrimayImage from "../ui/primary-image/primary-image";

interface UserCardProps {
  name: string;
  email: string;
  imgSrc: string;
  className?: string;
}

const UserCard: FC<UserCardProps> = ({ name, email, imgSrc, className }) => {
  return (
    <div
      className={`w-full flex gap-2 text-start items-center p-3 mb-2 ${className}`}
    >
      <PrimayImage
        src={imgSrc}
        alt="userImage"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserCard;
