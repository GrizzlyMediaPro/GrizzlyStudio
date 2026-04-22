import Link from "next/link";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import PortfolioAdminManager from "./PortfolioAdminManager";
import { requireAdminUser } from "@/lib/admin-access";

export default async function AdminPortfolioPage() {
  const { userId, isAdmin } = await requireAdminUser();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-black relative text-white">
        <div className="absolute inset-0 glow-effect pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
          <h1 className="nohemi-heading text-3xl md:text-4xl mb-3">
            Acces <span className="text-[#ffed88]">restrictionat</span>
          </h1>
          <p className="text-white/70 mb-6">
            Contul curent nu are drepturi de administrator.
          </p>
          <p className="text-white/60 text-sm">
            Seteaza in Clerk metadata utilizatorului <code>isAdmin: true</code>.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            Inapoi la site
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black relative text-white">
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/60 mb-2">
              Panel / Portfolio
            </p>
            <h1 className="nohemi-heading text-3xl md:text-4xl">
              Administrare <span className="text-[#ffed88]">Portofoliu</span>
            </h1>
            <p className="text-white/70 mt-2">
              Editeaza elementele din portofoliu si ordinea lor pentru fiecare categorie.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="px-4 py-2 rounded-full border border-white/25 text-white/85 hover:bg-white/10 transition-colors"
            >
              Inapoi la panou
            </Link>
            <div className="bg-white/5 border border-white/20 rounded-full p-1">
              <UserButton />
            </div>
          </div>
        </div>

        <PortfolioAdminManager />
      </div>
    </main>
  );
}
