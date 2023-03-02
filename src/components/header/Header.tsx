import { FC } from "react";
import { BsInstagram } from "react-icons/bs";
import { SiSnapcraft } from "react-icons/si";

export const Header: FC = () => {
  return (
    <header className="flex justify-between p-10">
      <h2 className="text-3xl font-bold">ShareInfo</h2>
      <div className="flex gap-5">
        <a
          href=""
          className="flex items-center gap-1 shadow rounded-full px-4 py-2"
        >
          <BsInstagram color="#f56040" />
          <span>Follow us</span>
        </a>
        <a
          href=""
          className="flex items-center gap-1 shadow rounded-full px-4 py-2"
        >
          <SiSnapcraft color="black" />
          <span>Crafted by</span>
        </a>
      </div>
    </header>
  );
};
