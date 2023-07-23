import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <header className="container flex justify-between items-center py-4">
        <h1 className="text-2xl">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </header>
      {children}
    </main>
  );
}
