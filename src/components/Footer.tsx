import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white mb-4"
        >
          Portfolio
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center space-x-6">
            <Link href="https://www.linkedin.com/in/emrah-fejzuli-588011285/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank">
                <Linkedin className="w-5 h-5" />
            </Link>
        </div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 block mt-6">
          © {new Date().getFullYear()} <a href="#" className="hover:underline">Emrah</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
