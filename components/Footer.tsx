export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-700">
          © {year} Andrii Dotsia. Built with Next.js and Tailwind CSS.
        </p>
        <p className="text-xs text-zinc-800">New Brunswick, Canada</p>
      </div>
    </footer>
  );
}
