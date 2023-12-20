'use client';

import {
  UserGroupIcon,
  HomeIcon,
  MapIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dash', icon: HomeIcon },
  {
    name: 'Hunts',
    href: '/dash/hunts',
    icon: MapIcon,
  },
  { name: 'Leaderboards', href: '/dash/leaderboards', icon: TrophyIcon}
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-indigo-700 hover:text-white hover:font-bold md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-indigo-700 text-white': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
