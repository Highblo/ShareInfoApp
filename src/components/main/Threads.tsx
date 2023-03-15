import { FC, useEffect, useState } from "react";
import axios from "axios";

import { endPoint } from "../atom/endPoint";
import { Card } from "./Card";

export const Threads: FC = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios.get(endPoint).then((res) => {
      setThreads(res.data);
    });
  }, []);
  return (
    <div className="bg-slate-300 rounded-3xl p-6 md:flex md:flex-wrap md:justify-around sm:p-12">
      {threads.map(({ _id, title, description, createdAt, updatedAt }) => (
        <Card
          id={_id}
          title={title}
          description={description}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      ))}
    </div>
  );
};
