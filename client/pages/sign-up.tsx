import Image from "next/image";
import Link from "next/link";

function signUp() {
  return (
    <div className="max-w-[34rem] mx-auto mt-24 px-4">
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
      <div className="bg-neutral-800 mt-7 rounded-md p-14">
        <h1 className="text-2xl text-center font-medium">
          Create your account
        </h1>
        <form action="" className="flex justify-start flex-col">
          <label htmlFor="" className="mt-7">
            Email
          </label>
          <input type="text" className="rounded-md text-black h-12 px-5 mt-2" />
          <label htmlFor="" className="mt-7">
            Password
          </label>
          <input type="text" className="rounded-md text-black h-12 px-5 mt-2" />
          <button className="bg-red-600 py-4 rounded-md mt-7">
            Create your account
          </button>
        </form>
        <p className="mt-7">
          Have an account?
          <span> </span>
          <Link href="sign-in">
            <a className="text-red-400">Sign in</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default signUp;
