import Image from "next/image";
import Link from "next/link";

function SignIn() {
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
      <div className="bg-neutral-800 mt-16 rounded-md px-6 p-14 sm:px-14">
        <h1 className="text-2xl text-center font-medium">
          Sign in to your account
        </h1>
        <form action="" className="flex justify-start flex-col">
          <label htmlFor="" className="mt-7 text-sm">
            Email
          </label>
          <input
            type="text"
            className="rounded-md text-black h-12 px-3 mt-2 outline-red-400 outline-2 focus:outline"
          />
          <div className="mt-7 flex justify-between">
            <label htmlFor="" className="text-sm">
              Password
            </label>
            <button className="text-red-400 text-sm hover:brightness-[75%]">
              Forgot your password?
            </button>
          </div>
          <input
            type="text"
            className="rounded-md text-black h-12 px-3 mt-2 outline-red-400 outline-2 focus:outline"
          />
          <button className="bg-red-600 h-12 rounded-md mt-7 hover:brightness-[75%]">
            Sign in
          </button>
        </form>
        <p className="mt-7 text-sm">
          Don&apos;t have an account?
          <span> </span>
          <Link href="sign-up">
            <a className="text-red-400 text-sm hover:brightness-[75%]">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignIn;
