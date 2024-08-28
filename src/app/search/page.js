import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
export default async function SearchPage({ searchParams }) {
  const { term } = searchParams;
  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={fetchPostsBySearchTerm} slug={term} />
    </div>
  );
}
