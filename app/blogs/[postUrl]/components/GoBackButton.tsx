"use client";

import GoBackIcon from "@/app/components/icons/common/GoBackIcon";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-2 my-4 text-sm cursor-pointer max-w-fit text-neutral-content"
      onClick={() => router.back()}
    >
      <GoBackIcon className="w-4 h-4" />
      back
    </div>
  );
}
