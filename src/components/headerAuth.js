"use client";
import { Button, Avatar } from "@nextui-org/react";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  return (
    <>
      {session.status === "loading" ? null : session.data?.user ? (
        <div className="flex gap-2 items-center">
          <Avatar src={session.data.user.image} />
          <form action={actions.signOut}>
            <Button color="danger" variant="ghost" auto type="submit" size="sm">
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <form action={actions.signIn}>
          <Button
            color="secondary"
            variant="ghost"
            auto
            type="submit"
            size="md"
          >
            Sign In with GitHub
          </Button>
        </form>
      )}
    </>
  );
}
