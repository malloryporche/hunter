import { GlobeAmericasIcon } from '@heroicons/react/24/outline';

export default function HunterLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <GlobeAmericasIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Hntr.</p>
    </div>
  );
}