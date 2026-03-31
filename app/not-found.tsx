import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center px-4">
        <h1
          className="text-6xl font-black text-primary dark:text-white uppercase mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          404
        </h1>
        <p className="text-text-muted text-lg mb-8">
          Page not found. The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-wide rounded-lg transition-all duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
