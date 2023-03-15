import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  bgColor: string;
  width?: string;
};

export const Button2: FC<Props> = (props) => {
  const { children, onClick, bgColor, width } = props;
  return (
    <button
      className={`${bgColor} ${width} py-2 px-4 rounded-xl text-white hover:scale-110 hover:opacity-80 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
