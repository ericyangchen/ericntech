import MDXImage from "@/mdxComponents/components/Image";
import { allPosts, type Post } from "contentlayer/generated";
import { notFound } from "next/navigation";
import PostContent from "./components/PostContent";
import PostHeader from "./components/PostHeader";
import PostLikeAndComment from "./components/PostLikeAndComment";

interface PostInfo extends Post {
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}
async function getPostByURL(postUrl: string): Promise<PostInfo | undefined> {
  const post = allPosts.find((post) => post.url === postUrl);

  if (!post) return undefined;

  // TODO: fetch post infos from firebase

  return post;
}

interface Props {
  params: {
    postUrl: string;
  };
}
export default async function BlogContentPage({ params }: Props) {
  const post = await getPostByURL(params.postUrl);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl p-2 mx-auto prose lg:mr-0">
      <PostHeader
        title={post.title}
        date={post.date}
        readingTime={post.readingTime.text}
        viewCount={post?.viewCount}
        likeCount={post?.likeCount}
        commentCount={post?.commentCount}
      />
      {post?.thumbnail && <MDXImage src={post.thumbnail} priority />}
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
