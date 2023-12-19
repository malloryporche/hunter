'use client';

import Link from 'next/link';
import Modal from '../ui/dash/newHuntModal.js';
import React, { useState } from 'react';

const createNewHunt = async (e) => {
  e.preventDefault();

  const mapData = {
    title: mapTitle,
    description: ''
  };
}

export default function Page() {
  const [isModalOpen, setModalOpen] = useState(true)

  return (
    <section>
      <h1>Dashboard Home</h1>
      <form onSubmit={(e) => {
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