 import Container from "@/components/modules/container/Container";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { FaCaretRight,FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <Container>
      <div className="p-8">
        <form
          action=""
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px",
          }}
          className="w-[400px] px-7 py-6 rounded-md text-center font-thin"
        >
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
              <FcGoogle/>
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
              <FaGithub/>
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
          </div>
          <Button className="my-7 w-full rounded-md bg-purple text-white">
            continue <FaCaretRight />
          </Button>

          <div className="flex justify-center gap-1 border-y border-gray-300 py-3 text-sm">
            <p>Dont hav account?</p>
            <Link href={"/register"} className="font-bold">
              Register
            </Link>
          </div>

          <div className="mt-4 flex justify-center gap-1 text-sm">
            <p>Secured by</p>
            <Image
              src={"/whitewithoutlogo.jpg"}
              alt="logo"
              className="h-[18px] w-24"
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
