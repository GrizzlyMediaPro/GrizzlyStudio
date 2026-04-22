import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-screen bg-black relative flex items-center justify-center p-6">
      <div className="absolute inset-0 glow-effect pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gradient-to-br from-black/40 via-neutral-900 to-neutral-800 rounded-3xl border border-white/15 p-5 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
          <SignIn path="/sign-in" routing="path" forceRedirectUrl="/admin" />
        </div>
      </div>
    </main>
  );
}
