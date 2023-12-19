'use client';

import Link from 'next/link';
import Modal from '../ui/dash/newHuntModal.js';
import React, { useState } from 'react';



export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false)

  const createNewHunt = () => {
    setModalOpen(true);
    console.log(true);
    const mapData = {
      title: mapTitle,
      description: ''
    };
  }

  return (
    <section>
      <h1>Dashboard Home</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        createNewHunt();
        }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-60 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Create A New Hunt</div>
          </button>
      </form>

      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </section>
  )
}