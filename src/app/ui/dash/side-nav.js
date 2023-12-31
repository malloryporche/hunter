import Link from 'next/link';
import NavLinks from './nav-links';
import HunterLogo from '../hunter-logo.js';
import { PowerIcon } from '@heroicons/react/24/outline';
const { useSession, signIn, signOut, } = 'next-auth/react';

export default function SideNav() {
  const { data: session } = useSession();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <HunterLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>

            {session ? (
            <form>
              <p>Signed in as {session.user.email}</p>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-700 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                  <div className="hidden md:block">Sign Out</div>
                </button>
              </form>
            ) : (
              <form>
              <p>Not signed in.</p>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-700 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign In</div>
              </button>
              </form>
            )}
      </div>
    </div>
  );
}
