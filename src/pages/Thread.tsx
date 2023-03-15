import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../components/atom/Button";
import { Button2 } from "../components/atom/Button2";
import { endPoint } from "../components/atom/endPoint";

type threadType = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const Thread: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [thread, setThread] = useState({} as threadType);
  const [id, setId] = useState<string>(location.state);

  useEffect(() => {
    axios.get(`${endPoint}/${id}`).then((res) => {
      setThread(res.data);
    });
  }, []);

  const deleteThread = (id: string) => {
    axios.delete(`${endPoint}/${id}`).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="flex-1">
      <div className="w-[80%] max-w-5xl mx-auto bg-slate-200 shadow-xl rounded-3xl p-6 mt-28 space-y-7 md:w-[65%]">
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
        <div className="text-center space-x-3 md:space-x-6">
          <Button2
            onClick={() => deleteThread(id)}
            bgColor="bg-green-300"
            width="w-[30%]"
          >
            削除
          </Button2>
          <Button2 bgColor="bg-violet-300" width="w-[30%]">
            編集
          </Button2>
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
