import NextLink, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children?: React.ReactNode;
}

export default function Link({ children, ...props }: Props) {
  return (
    <NextLink {...props} className="not-prose">
      {children}
    </NextLink>
  );
}
