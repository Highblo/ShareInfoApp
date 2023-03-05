import { FC } from "react";

import { Threads } from "../components/main/Threads";
import { Title } from "../components/main/Title";

export const Home: FC = () => {
  return (
    <main>
      <div className="container m-auto">
        <Title />
        <Threads />
      </div>
    </main>
  );
};
