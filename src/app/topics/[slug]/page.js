import PostCreateForm from "@/components/posts/postCreateForm";
import { decode } from "@auth/core/jwt";
import PostList from "@/components/posts/post-list";
import fetchPostsByTopicSlug from "@/db/queries/posts.js";

export default function TopicShowPage(props) {
  let { slug } = props.params;
  let decodedSlug = decodeURIComponent(slug);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 ml-40">
        <h1 className="text-2xl font-bold mb-2">{decodedSlug}</h1>
        <PostList fetchData={fetchPostsByTopicSlug} slug={decodedSlug} />
      </div>
      <div>
        <PostCreateForm slug={decodedSlug} />
      </div>
    </div>
  );
}
