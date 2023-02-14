"use client";
import { HTMLAttributes, useState } from "react";
import DocumentSquareIcon from "@/app/components/icons/common/DocumentSquareIcon";
import FolderPlusSquareIcon from "@/app/components/icons/common/FolderPlusSquareIcon";
import FolderMinusSquareIcon from "@/app/components/icons/common/FolderMinusSquareIcon";

interface TreeProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  name: string | JSX.Element;
}
export const Tree = ({ children, name, defaultOpen = false }: TreeProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center transition ease-in-out">
        {children ? (
          <>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="transition ease-in-out"
            >
              {isOpen ? (
                <FolderMinusSquareIcon className="w-5 h-5" />
              ) : (
                <FolderPlusSquareIcon className="w-5 h-5" />
              )}
            </button>
            <code className="font-light text-yellow-500">{name}</code>
          </>
        ) : (
          <>
            <DocumentSquareIcon className="w-5 h-5 opacity-50" />
            <code className="font-light opacity-70">{name}</code>
          </>
        )}
      </div>
      {isOpen && <div className="pl-6 transition ease-in-out">{children}</div>}
    </div>
  );
};

export function TreeContainer({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col w-full px-12 py-6 rounded-lg md:px-16 bg-base-200">
      {children}
    </div>
  );
}
