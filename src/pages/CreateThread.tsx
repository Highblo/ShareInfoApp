import { FC } from "react";

export const CreateThread: FC = () => {
  return (
    <div>
      <div className="w-[60%] mx-auto p-4">
        <h2 className="text-3xl font-bold text-center">新規投稿フォーム</h2>
        <form
          action="http://localhost:8000/threads"
          method="POST"
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
