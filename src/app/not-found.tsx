import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center pb-16">
      <h1 className="text-[8rem] sm:!text-[10rem] font-extrabold tracking-widest text-purple">
        404
      </h1>
      <div className="absolute mr-2 rotate-12 rounded dark:text-black bg-[#fff] px-2 text-sm">
        Page Not Found
      </div>
      <button>
        <div className="group relative inline-block text-sm font-medium text-[#fff] focus:outline-none focus:ring">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 dark:bg-white bg-[#000] transition-transform"></span>

          <span className="relative block rounded-tl-md border border-current bg-purple">
            <Link className="px-8 py-3 block" href="/">
              Go Home
            </Link>
          </span>
        </div>
      </button>
    </main>
  );
}
