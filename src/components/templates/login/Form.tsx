"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCaretRight, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  const [forgot, setForgot] = useState(false);
  return (
    <form action="" className="w-[400px] text-center font-thin">
      {forgot ? (
        <>
          <p className="text-xl font-bold relative block lg:!mt-16"> Forgot Password</p>
          <p className="text-sm">Please write your email!</p>

          <div className="mt-3">
            <p className="mb-2 text-left text-sm font-semibold">Email</p>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-2 py-1"
              name=""
              id=""
            />
            <div className="mt-2 cursor-pointer text-left text-sm text-purple">
              <p onClick={() => setForgot(false)}>Back to login</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-xl font-bold">Login to PenTome</p>
          <p className="text-sm">Welcome back! Please login to continue</p>
          <div className="my-5 flex justify-center gap-2">
            <Button
              className="h-8 rounded-md border-1"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px",
              }}
              variant="light"
            >
              Google
              <FcGoogle />
            </Button>
            <Button
              className="h-8 rounded-md border-1"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px",
              }}
              variant="light"
            >
              Github
              <FaGithub />
            </Button>
          </div>

          <div>
            <p className="mb-2 text-left text-sm font-semibold">UserName</p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-2 py-1"
              name=""
              id=""
            />
          </div>
          <div className="mt-3">
            <p className="mb-2 text-left text-sm font-semibold">Password</p>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 px-2 py-1"
              name=""
              id=""
            />
            <div className="mt-2 cursor-pointer text-left text-sm text-purple">
              <p onClick={() => setForgot(true)}>Forgot password</p>
            </div>
          </div>
        </>
      )}

      <Button className="my-7 w-full rounded-md bg-purple text-white">
        continue <FaCaretRight />
      </Button>

      {!forgot && (
        <div className="flex justify-center gap-1 border-y border-gray-300 py-3 text-sm">
          <p>Dont have an account?</p>
          <Link href={"/register"} className="font-bold">
            Register
          </Link>
        </div>
      )}

      <div className="mt-4 flex justify-center gap-1 text-sm">
        <p>Secured by</p>
        <Image
          src={"/images/Untitled-3-removebg-preview.png"}
          alt="logo"
          className="h-[18px] w-24"
          width={1000}
          style={{ filter: "hue-rotate(17deg)" }}
          height={1000}
        />
      </div>
    </form>
  );
};

export default Form;
