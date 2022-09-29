import Link from 'next/link';
import style from './Navbar.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <a className={style.title}>
          Next<span>Auth</span>
        </a>
      </Link>

      <div className={style.navbar_links}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {status === 'authenticated' ? (
            <>
              <li>
                <Link href="/dashboard">Verified Page</Link>
              </li>
              <li>
                <a onClick={() => signOut()}>Sign Out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/dashboard">Secure Page</Link>
              </li>
              <li>
                <a onClick={() => signIn()}>Sign In</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
