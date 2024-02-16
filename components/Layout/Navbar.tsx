import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
      <div className="font-bold text-3xl flex items-center">
        <img src='./logo.png'/>
        <a
          className="ml-2 hover:opacity-50"
        >
          ChitChatSainsData
        </a>
      </div>
    </div>
  );
};
