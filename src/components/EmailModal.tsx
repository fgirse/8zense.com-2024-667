"use client"

import React from 'react';
import { motion } from 'framer-motion';
import type {  Dispatch, SetStateAction } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import { ClientAnimationWrapper } from '@/src/components/ClientAnimationWrapper';
//import styles from "@/src/components/EmailModal.module.css";
//import EmailMessage from "@/src/app/[locale]/api/emails/EmailMessage";
const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="grid place-content-center bg-transparent px-4 py-12">
      <div className='wrapper'>
        <button
        onClick={() => setIsOpen(true)}
        className="w-60 h-15">
      sende email Nachricht
    </button>
    </div>
    <EmailModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    </>
  );
};

const EmailModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ClientAnimationWrapper>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/50 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="to-grey-600 relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 p-6 text-white shadow-xl"
          >
            <FiAlertCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
            <div className="relative z-10">
              <div className="text-zenseSignal2 mx-auto mb-2 grid size-16 place-items-center rounded-full bg-white text-3xl">
                <FiAlertCircle />
              </div>
                  <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded bg-white/10 py-2 font-semibold text-white transition-colors hover:bg-white/40"
                >
                  zurück
                </button>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
      </button> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </ClientAnimationWrapper>
  );
};

export default ExampleWrapper;