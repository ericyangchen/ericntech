import { allPosts, type Post } from "contentlayer/generated";
import { notFound } from "next/navigation";
import PostContent from "./components/PostContent";
import PostTitleInfo from "./components/PostTitleInfo";
import PostLikeAndComment from "./components/PostLikeAndComment";

interface Props {
  params: {
    postUrl: string;
  };
}

function getPostByURL(postUrl: string): Post | undefined {
  const post = allPosts.find((post) => post.url === postUrl);
  return post;
}

export default function BlogContentPage({ params }: Props) {
  const post = getPostByURL(params.postUrl);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl p-2 mx-auto prose md:prose-lg prose-zinc">
      <PostTitleInfo title={post.title} date={post.date} />
      <PostContent code={post.body.code} />
      <PostLikeAndComment />
    </div>
  );
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    postUrl: post.url,
  }));
}
