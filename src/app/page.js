import TopicCreateForm from "@/components/topics/topicCreateForm";
import TopicList from "@/components/topics/topicList";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 ml-40">
        <h1 className="text-xl m-2">Top posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div>
        <TopicCreateForm />
        <div className="my-4 bg-gradient-to-r from-purple-500 to-blue-900 p-1 max-w-fit rounded-lg">
          <div className="bg-background-gradient p-5 rounded-lg">
            <TopicList />
          </div>
        </div>
      </div>
    </div>
  );
}
