"use client";

import "@code-hike/mdx/dist/index.css";
import "./postContent.css";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getAllMdxComponents } from "../../../../mdxComponents";

const mdxComponents = getAllMdxComponents();

interface Props {
  code: string;
}

export default function PostContent({ code }: Props) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
