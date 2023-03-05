import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { endPoint } from "../components/atom/endPoint";

export const CreateThread: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const sendNewThread = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { title, description };

    axios.post(endPoint, data).then(() => {
      setTitle("");
      setDescription("");
      navigate("/");
    });
  };

  return (
    <div>
      <div className="w-[60%] mx-auto p-4">
        <h2 className="text-3xl font-bold text-center">新規投稿フォーム</h2>
        <form
          onSubmit={(e) => sendNewThread(e)}
          className="shadow-lg rounded-lg space-y-8 p-5"
        >
          <div className="flex items-center gap-3">
            <label htmlFor="title" className="text-lg">
              タイトル :
            </label>
            <input
              type="text"
              id="title"
              placeholder="タイトルを入力してください"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border p-3 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="description" className="text-lg">
              内容 :
            </label>
            <textarea
              id="description"
              placeholder="内容を入力してください"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1 border p-3 outline-none"
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="bg-green-300 py-2 px-4 rounded-xl text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
