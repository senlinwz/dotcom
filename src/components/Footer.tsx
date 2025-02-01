import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="w-full mx-auto flex flex-row justify-center items-center py-8 px-6 sm:px-8">
      <div className="max-w-7xl w-full shadow-sm mx-auto bg-zinc-50 rounded-3xl py-8 sm:py-12 sm:pb-16 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-6">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex flex-row justify-start items-center">
            <img src="/logo-main.png" className="h-12 md:h-14 w-auto" alt="" />
          </div>
          <div className="mt-4 text-gray-500 font-sans">
            <a href="mailto:craftsphere@qq.com" className="hover:text-[#036dd7] transition-colors flex items-center gap-2">
              <HiOutlineMail className="w-5 h-5" />
              craftsphere@qq.com
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start space-y-2">
          <p className="my-2 text-gray-400 font-medium font-sans">敬请期待</p>
          <Link className="w-auto flex flex-row justify-center items-center cursor-pointer hover:underline hover:text-teal-600" href="">
            <span className="font-sans">敬请期待</span>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start space-y-2">
          <p className="my-2 text-gray-400 font-medium font-sans">敬请期待</p>
          <Link className="w-auto flex flex-row justify-center items-center cursor-pointer hover:underline hover:text-teal-600" href="">
            <span className="font-sans">敬请期待</span>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start space-y-2">
          <p className="my-2 text-gray-400 font-medium font-sans">敬请期待</p>
          <Link href="" target="_blank">
            <span className="w-auto flex flex-row justify-center items-center cursor-pointer hover:underline hover:text-teal-600 font-sans">
              敬请期待
              <Icon.ExternalLink className="w-4 h-auto ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
