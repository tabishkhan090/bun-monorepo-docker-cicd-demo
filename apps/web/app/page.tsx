import { Prismaclient } from "prisma/client";

export default async function Home() {
  const users = await Prismaclient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

