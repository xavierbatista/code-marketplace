import Image from "next/image";

function signUp() {
  return (
    <div className="max-w-[38rem] mx-auto mt-24 px-4">
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
      {/* LOGO */}
      <div className="bg-neutral-700 mt-7 rounded-md p-9">
        <h1 className="text-2xl font-medium">
          Create your Code Marketplace account
        </h1>
        <form action="" className="flex justify-start flex-col">
          <label htmlFor="">Email</label>
          <input type="text" className="rounded-md text-black" />
          <label htmlFor="">Password</label>
          <input type="text" className="rounded-md text-black" />
          <button className="bg-red-600 py-4 rounded-md">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
}
export default signUp;
