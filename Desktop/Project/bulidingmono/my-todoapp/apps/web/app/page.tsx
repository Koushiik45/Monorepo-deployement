import type { ReactNode } from "react";
import { prismaClient } from "db/client";

export default async function Home(): Promise<ReactNode> {
  const users = await prismaClient.user.findMany();

  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// how to convert the static page to dynamic

export const revalidate = 60 //revalidate every 60 seconds
//or
//export const dynamic =  'force-dynamic'