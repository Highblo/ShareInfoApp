import { FC, useEffect, useState } from "react";
import axios from "axios";

import { Button } from "../atom/Button";

export const Threads: FC = () => {
  const [threads, setThreads] = useState([]);

  const endPoint = "http://localhost:8000/threads";
  useEffect(() => {
    axios.get(endPoint).then((res) => {
      setThreads(res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-7 p-3">
      {threads.map(({ _id, title, description }) => (
        <div key={_id} className="w-[32%] shadow rounded-lg space-y-3 p-4">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          <p className="line-clamp-1">{description}</p>
          <div className="space-x-2">
            <Button bgColor="bg-green-300" url="#">編集する</Button>
            <Button bgColor="bg-blue-300" url="#">削除する</Button>
            <Button bgColor="bg-pink-300" url="#">見ました</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
