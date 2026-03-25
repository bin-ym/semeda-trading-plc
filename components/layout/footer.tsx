import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
        {/* Logo */}
        <div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-[0.2em] text-primary">
              SEMEDA
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-accent">
              Trading PLC
            </span>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Addis Ababa, Bole <br />
            Ethiopia
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/sectors">Sectors</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">
            Email: info@semeda.com <br />
            Phone: +251 XXX XXX XXX
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Semeda Trading PLC. All rights reserved.
      </div>
    </footer>
  );
}
