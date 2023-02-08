import MDXImage from "@/mdxComponents/components/Image";
import { PostInfo } from "@/store/types";
import supabase from "@/supabase/supabase";
import { allPosts, Post } from "contentlayer/generated";
import { notFound } from "next/navigation";
import GoBackButton from "./components/GoBackButton";
import PostContent from "./components/PostContent";
import PostHeader from "./components/PostHeader";
import PostLikeAndComment from "./components/PostLikeAndComment";

type PostCombined = PostInfo &
  Pick<Post, "readingTime" | "tags"> & { code: string };

interface Props {
  params: {
    postUrl: string;
  };
}

async function getPostCombined(
  postUrl: string
): Promise<PostCombined | undefined> {
  // post from contentlayer
  const postContent = allPosts.find((post) => post.url === postUrl);
  if (!postContent) return undefined;

  const { data: postInfo, error } = await supabase
    .from("post")
    .select()
    .eq("url", postUrl)
    .single();
  if (error) {
    notFound();
  }

  const postCombined = {
    readingTime: postContent.readingTime,
    tags: postContent.tags,
    code: postContent.body.code,
    ...postInfo,
  };

  return postCombined;
}

export default async function BlogContentPage({ params }: Props) {
  const post = await getPostCombined(params.postUrl);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl p-2 mx-auto prose lg:mr-0">
      <GoBackButton />
      <PostHeader
        title={post.title}
        date={post.date}
        readingTime={post.readingTime.text}
        viewCount={post?.viewCount}
        likeCount={post?.likeCount}
        commentCount={post?.commentCount}
      />
      {post?.thumbnail && <MDXImage src={post.thumbnail} priority />}
      <PostContent code={post.code} />
      <PostLikeAndComment />
    </div>
  );
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    postUrl: post.url,
  }));
}
