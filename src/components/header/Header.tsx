import { FC } from "react";
import { BsInstagram } from "react-icons/bs";
import { SiSnapcraft } from "react-icons/si";

export const Header: FC = () => {
  return (
    <header className="flex justify-between sticky top-0 p-4 text-white bg-gray-800 z-50 sm:py-5 sm:px-10 lg:px-16">
      <h2>
        <a
          href="/"
          className="text-lg font-bold h-full sm:text-2xl lg:text-4xl"
        >
          ShareInfo
        </a>
      </h2>
      <div className="flex gap-2 text-xs sm:text-sm sm:gap-5 lg:text-base">
        <a
          href="#"
          className="flex items-center gap-1 bg-gray-700 px-2 shadow-md shadow-gray-400 rounded-2xl transition hover:-translate-y-1 sm:gap-2 sm:px-4 sm:py-2"
        >
          <BsInstagram color="#f56040" />
          <span>Follow me</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-1 bg-gray-700 px-2 shadow-md shadow-gray-400 rounded-2xl transition hover:-translate-y-1 sm:gap-2 sm:px-4 sm:py-2"
        >
          <SiSnapcraft color="black" />
          <span>Crafted by</span>
        </a>
      </div>
    </header>
  );
};
