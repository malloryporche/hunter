'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../ui/dash/newHuntModal.js';
import Map from '../ui/map.js';

const center = {
  lat: -3.745,
  lng: -38.523
};

const containerStyle = {
  width: '100%',
  height: '600px'
};


export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false)

  const createNewHunt = (mapTitle) => {
    setModalOpen(true);
    console.log(true);
    const mapData = {
      title: mapTitle,
      description: '',
      center: center,
    };
  }

  return (
    <section>
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
      />

      <Map
          center={center}
          containerStyle={containerStyle}
      />
    </section>
  )
}