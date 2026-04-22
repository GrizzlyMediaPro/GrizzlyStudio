import Link from "next/link";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { requireAdminUser } from "@/lib/admin-access";

export default async function AdminPage() {
  const { userId, isAdmin } = await requireAdminUser();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-black relative text-white">
        <div className="absolute inset-0 glow-effect pointer-events-none"></div>
        <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-black/40 via-neutral-900 to-neutral-800 rounded-3xl border border-white/15 p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <h1 className="nohemi-heading text-3xl md:text-4xl mb-4">
              Acces <span className="text-[#ffed88]">restrictionat</span>
            </h1>
            <p className="text-white/75 mb-6">
              Doar utilizatorii cu <code>isAdmin: true</code> in metadata Clerk pot
              accesa panoul de administrare.
            </p>
            <Link
              href="/"
              className="inline-flex bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Inapoi la site
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black relative text-white">
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="nohemi-heading text-3xl md:text-5xl">
              Panou <span className="text-[#ffed88]">Administrator</span>
            </h1>
            <p className="text-white/70 mt-2">
              Gestioneaza rapid continutul publicat pe site.
            </p>
          </div>
          <div className="bg-white/5 border border-white/20 rounded-full p-1">
            <UserButton />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/admin/portfolio"
            className="group bg-gradient-to-br from-black/30 via-neutral-900 to-neutral-800 rounded-3xl border border-white/15 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-[#ffed88]/50 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          >
            <p className="text-sm uppercase tracking-wider text-white/60 mb-3">
              Continut
            </p>
            <h2 className="nohemi-heading text-2xl mb-3">
              Administrare <span className="text-[#ffed88]">Portofoliu</span>
            </h2>
            <p className="text-white/75">
              Editezi proiecte, schimbi ordinea prin drag and drop si actualizezi
              instant carousel-ul public.
            </p>
            <span className="mt-6 inline-flex text-[#ffed88] group-hover:translate-x-1 transition-transform">
              Intra in modul de editare →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
