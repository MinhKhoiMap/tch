import Image from "next/image";
import Link from "next/link";
export function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="logo" href="/">
          <span className="logo-mak">
            <Image src="/tch_logo.ico" width={32} height={32} alt="tch" />
          </span>
          <span>
            Tech-Convergence Hub<small>UEH Technology Platform</small>
          </span>
        </Link>
        <nav className="nav-links">
          <Link href="/">Overview</Link>
          <Link href="/#lab-directory">Labs</Link>
          {/* <Link href="/#orbit-section">Orbit</Link> */}
          <Link href="/#news">News</Link>
        </nav>
        <Link className="nav-cta" href="/#lab-directory">
          Explore labs
        </Link>
      </div>
    </header>
  );
}
