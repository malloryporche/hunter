import Image from 'next/image';
import HunterLogo from './ui/hunter-logo.js';
import MyMap from './ui/map.js';
import ArrowRightIcon from '@heroicons/react/24/outline'

const center = {
  lat: -3.745,
  lng: -38.523
};

const containerStyle = {
  width: '100%',
  height: '600px'
};


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <MyMap
          center={center}
          containerStyle={containerStyle}
        />
    </main>
  )
}
