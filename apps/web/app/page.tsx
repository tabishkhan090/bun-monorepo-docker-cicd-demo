import { Prismaclient } from "prisma/client";

export default async function Home() {
  const users = await Prismaclient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
// DATABASE_URL="postgresql://postgres:mrkhan@localhost:5432/postgres"