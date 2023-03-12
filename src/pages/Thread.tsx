import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "../components/atom/Button";
import { endPoint } from "../components/atom/endPoint";

type threadType = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const Thread: FC = () => {
  const location = useLocation();
  const [thread, setThread] = useState({} as threadType);
  const [id, setId] = useState<string>(location.state);

  useEffect(() => {
    axios.get(`${endPoint}/${id}`).then((res) => {
      setThread(res.data);
    });
  }, []);

  return (
    <div className="flex-1">
      <div className="w-[65%] max-w-5xl mx-auto bg-slate-200 shadow-lg rounded-3xl p-6 mt-28 space-y-7">
        <div>
          <p className="font-bold">タイトル</p>
          <h3>{thread.title}</h3>
        </div>
        <div>
          <p className="font-bold">内容</p>
          <p>{thread.description}</p>
        </div>
        <div>
          <p className="font-bold">作成日</p>
          <p>{thread.createdAt}</p>
        </div>
        <div>
          <p className="font-bold">更新日</p>
          <p>{thread.updatedAt}</p>
        </div>
        <div className="text-center space-x-6">
          <button className="bg-green-300 w-[20%] py-2 px-4 rounded-xl text-white cursor-pointer hover:scale-110 transition disabled:opacity-60 disabled:hover:scale-100">
            削除
          </button>
          <button className="bg-green-300 w-[20%] py-2 px-4 rounded-xl text-white cursor-pointer hover:scale-110 transition disabled:opacity-60 disabled:hover:scale-100">
            編集
          </button>
        </div>
      </div>
      <div className="text-center mt-7">
        <Button url="/" bgColor="bg-blue-300">
          一覧へ
        </Button>
      </div>
    </div>
  );
};
