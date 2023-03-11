import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
  url: string;
};

export const Button: FC<Props> = (props) => {
  const { children, bgColor, url } = props;

  return (
    <a
      href={url}
      className={`${bgColor} py-2 px-4 rounded-xl text-white hover:scale-110 hover:opacity-80 transition`}
    >
      {children}
    </a>
  );
};
