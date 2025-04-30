import Container from "@/components/modules/container/Container";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="p-5">
        <form
          action=""
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px",
          }}
          className="w-[500px] p-4 text-center font-thin"
        >
          <p className="text-xl font-bold">Login to PenTome</p>
          <p className="text-sm">Welcome back! Please login to continue</p>
          <div className="flex justify-center gap-2 my-5">
            <Button
              className="h-8 rounded-md border-1"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px",
              }}
              variant="light"
            >
              Google
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
            </Button>
          </div>

          <div>
            <p className="text-left text-sm font-semibold mb-2">UserName</p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2"
              name=""
              id=""
            />
          </div>
          <div className="mt-3">
            <p className="text-left text-sm font-semibold mb-2">Password</p>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 p-2"
              name=""
              id=""
            />
          </div>
          <Button className="rounded-md my-3 w-full bg-purple text-white">continue</Button>

          <div className="flex text-sm gap-1 border-y py-3 justify-center border-gray-300">
            <p>Dont hav account?</p>
            <Link href={"/register"} className="font-bold">Register</Link>
          </div>

          <div className="flex text-sm gap-1 justify-center mt-4">
            <p>Secured by</p>
            <Image
              src={"/whitewithoutlogo.jpg"}
              alt="logo"
              className="w-24 h-5"
              width={1000}
              height={1000}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default page;
