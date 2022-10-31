import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import firebaseErrorToText from '../helpers/firebaseErrorToText';

function ResetPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      setMessage('');
      setErrorMessage('');

      if (email) {
        await resetPassword(email);
        setMessage('Check your inbox to reset your password');
      } else setErrorMessage('Email required');
    } catch (error: any) {
      setErrorMessage(firebaseErrorToText(error)); //todo - make the box red too
      console.error(error);
    }
  };

  return (
    <div className="max-w-[34rem] mx-auto py-8 px-4">
      {/* LOGO */}
      <div className="flex justify-start items-center select-none">
        <div className="w-8 h-8 relative">
          <Image src="/logo.png" alt="Logo" layout="fill" />
        </div>
        <div className="inline-block">
          <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
            Code
          </div>
          <div className="text-xl ml-1 font-semibold leading-[1.1rem]">
            Marketplace
          </div>
        </div>
      </div>
      {/* FORM */}
      <div className="bg-neutral-900 mt-8 sm:mt-16 rounded-md p-16 px-6 sm:px-16">
        <h1 className="med-heading text-center">Reset your password</h1>
        {message && (
          <div className="rounded-md min-h-[3rem] p-3 bg-neutral-700 mt-8 flex items-center">
            <div className="overflow-hidden text-center w-full">{message}</div>
          </div>
        )}
        <form action="" className="flex justify-start flex-col">
          <label htmlFor="email" className="mt-8 text-sm w-fit">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="rounded-md text-black h-12 px-3 mt-2 outline-red-400 outline-2 focus:outline"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="h-2 text-red-500 text-sm">{errorMessage}</div>
          <button
            className="bg-red-600 h-12 rounded-md mt-6 clickable"
            onClick={(e) => handleResetPassword(e)}
          >
            Reset password
          </button>
        </form>
        <p className="mt-8 text-sm">
          <Link href="/sign-in">
            <a className="text-red-400 text-sm clickable">Return to sign in</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default ResetPassword;
