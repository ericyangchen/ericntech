"use client";

import GoBackIcon from "@/app/components/icons/common/GoBackIcon";

export default function GoBackButton() {
  return (
    <div className="flex items-center gap-2 my-4 text-sm cursor-pointer max-w-fit text-neutral-content">
      <GoBackIcon className="w-4 h-4" />
      back
    </div>
  );
}
