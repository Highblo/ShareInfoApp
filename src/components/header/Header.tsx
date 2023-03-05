import { FC } from "react";
import { BsInstagram } from "react-icons/bs";
import { SiSnapcraft } from "react-icons/si";

export const Header: FC = () => {
  return (
    <header className="flex justify-between sticky top-0 py-7 px-12 mb-1">
      <h2 className="text-3xl font-bold">
        <a href="/" className="h-full">
          ShareInfo（仮）
        </a>
      </h2>
      <div className="flex gap-5">
        <a
          href="#"
          className="flex items-center gap-1 shadow rounded-full px-4 py-2"
        >
          <BsInstagram color="#f56040" />
          <span>Follow me</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-1 shadow rounded-full px-4 py-2"
        >
          <SiSnapcraft color="black" />
          <span>Crafted by</span>
        </a>
      </div>
    </header>
  );
};
