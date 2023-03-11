import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { endPoint } from "../components/atom/endPoint";
import { Button } from "../components/atom/Button";

export const CreateThread: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const sendNewThread = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { title, description };

    axios.post(endPoint, data).then(() => {
      setTitle("");
      setDescription("");
      navigate("/");
    });
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-[65%] max-w-5xl mb-36 space-y-7">
        <h2 className="text-3xl font-bold text-center">新規投稿フォーム</h2>
        <form
          className="shadow-lg rounded-3xl space-y-8 p-6 bg-slate-200"
          onSubmit={(e) => sendNewThread(e)}
        >
          <div>
            <label htmlFor="title" className="text-xl">
              タイトル
            </label>
            <input
              type="text"
              id="title"
              placeholder="タイトルを入力してください"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-2xl p-3 mt-3 outline-none"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-xl">
              内容
            </label>
            <textarea
              id="description"
              placeholder="内容を入力してください"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full rounded-2xl p-3 mt-3 outline-none"
            />
          </div>
          <div className="text-center">
            <button
              className="bg-green-300 w-[20%] py-2 px-4 rounded-xl text-white cursor-pointer hover:scale-110 transition disabled:opacity-60 disabled:hover:scale-100"
              disabled={title === "" || description === ""}
            >
              作成
            </button>
          </div>
        </form>
        <div className="text-center">
          <Button url="/" bgColor="bg-blue-300">
            一覧へ
          </Button>
        </div>
      </div>
    </div>
  );
};
