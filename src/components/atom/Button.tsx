import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
};

export const Button: FC<Props> = (props) => {
  const { children, bgColor } = props;
  return (
    <button className={`${bgColor} py-2 px-4 rounded-xl text-white`}>
      {children}
    </button>
  );
};
