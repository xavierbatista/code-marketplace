import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import firebaseErrorToText from '../helpers/firebaseErrorToText';

function SignIn() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSignIn = async (e: any) => {
    try {
      e.preventDefault();
      setEmailErrorMessage('');
      setPasswordErrorMessage('');

      if (data.email && data.password) {
        await signIn(data.email, data.password);
        router.push('/users/user-id');
      } else {
        !data.email && setEmailErrorMessage('Email required');
        !data.password && setPasswordErrorMessage('Password required');
      }
    } catch (error: any) {
      const emailErrors = new Set([
        'auth/user-not-found',
        'auth/missing-email',
        'auth/invalid-email',
        'auth/email-already-in-use',
      ]);

      emailErrors.has(String(error.code))
        ? setEmailErrorMessage(firebaseErrorToText(error))
        : setPasswordErrorMessage(firebaseErrorToText(error));
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
        <h1 className="med-heading text-center">Sign in to your account</h1>
        <form action="" className="flex justify-start flex-col">
          <label htmlFor="email" className="mt-6 text-sm w-fit">
            Email
          </label>
          <input
            autoFocus
            type="text"
            id="email"
            className="rounded-md text-black h-12 px-3 mt-1 outline-red-400 outline-2 focus:outline"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
          <div className="h-2 text-red-500 text-sm">{emailErrorMessage}</div>
          <div className="mt-4 flex justify-between">
            <label htmlFor="password" className="text-sm w-fit">
              Password
            </label>
            <Link href="/reset-password">
              <a className="text-red-400 text-sm clickable">
                Forgot your password?
              </a>
            </Link>
          </div>
          <input
            type="password"
            id="password"
            className="rounded-md text-black h-12 px-3 mt-1 outline-red-400 outline-2 focus:outline"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
          <div className="h-2 text-red-500 text-sm">{passwordErrorMessage}</div>
          <button
            className="bg-red-600 h-12 rounded-md mt-6 clickable"
            onClick={(e) => handleSignIn(e)}
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-sm">
          <span>Don&apos;t have an account? </span>
          <Link href="/sign-up">
            <a className="text-red-400 text-sm clickable">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignIn;
