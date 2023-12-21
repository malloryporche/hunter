'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../ui/dash/newHuntModal.js';
import Map from '../ui/map.js';
import { SessionProvider } from 'next-auth';


const center = {
  lat: 34.0549,
  lng: -118.2426
};

const containerStyle = {
  width: '100%',
  height: '600px'
};

const buildHunt = (input) => {
  const hunt = {
    name: input.name,
    owner: input.owner,
  }
  createHunt(hunt);
}
export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [markers, setMarker] = useState([]);

  const createNewHunt = (mapTitle) => {
    setModalOpen(true);
    const mapData = {
      title: mapTitle,
      description: '',
      center: center,
      markers: [],
    };
  }

  return (
    <section>
      <SessionProvider session={session}>
      <h1>Dashboard Home</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        createNewHunt();
        }}>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-60 p-3 text-sm font-medium hover:bg-indigo-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Create A New Hunt</div>
          </button>
      </form>

      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        buildHunt={buildHunt}
      />

      <Map
          center={center}
          containerStyle={containerStyle}
      />
      </SessionProvider>
    </section>
  )
}