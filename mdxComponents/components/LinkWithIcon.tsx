import LinkIcon from "@/app/components/icons/common/LinkIcon";
import { LinkProps } from "next/link";
import Link from "./Link";

interface Props extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export default function LinkWithIcon({
  children,
  className,
  iconClassName,
  ...props
}: Props) {
  return (
    <Link {...props}>
      <div
        className={
          "flex flex-row flex-wrap items-center italic font-normal not-prose " +
          className
        }
      >
        <p>
          <LinkIcon className={iconClassName} />
        </p>
        {children}
      </div>
    </Link>
  );
}
