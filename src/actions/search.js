"use server";

import { redirect } from "next/navigation";

export async function search(formData) {
  const term = formData.get("term");

  if (typeof term !== "string") {
    return redirect("/");
  }

  redirect(`/search?term=${term}`);
}
