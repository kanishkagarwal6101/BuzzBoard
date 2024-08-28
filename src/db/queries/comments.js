import { db } from "@/db";

export async function fetchCommentsByPostId(postId) {
  return db.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
}
