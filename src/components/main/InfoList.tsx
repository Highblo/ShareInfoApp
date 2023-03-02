import { FC } from "react";

import { Button } from "../atom/Button";

export const InfoList: FC = () => {
  return (
    <main>
      <div className="container m-auto">
        <div className="text-center space-y-3 mb-5">
          <h1 className="text-6xl font-bold">What to share?</h1>
          <p>情報を共有しよう</p>
          <Button bgColor="bg-green-300">新規投稿</Button>
        </div>
        <div className="flex flex-wrap p-3">
          <div className="w-[30%] shadow rounded-lg space-y-3 p-4">
            <h3 className="text-lg font-bold">タイトル</h3>
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique perspiciatis ipsam amet odit tempora alias nostrum
              beatae vero libero, quod, at unde ducimus corporis doloremque
              rerum officia odio sequi repellat.
            </p>
            <div className="space-x-2">
              <Button bgColor="bg-green-300">編集する</Button>
              <Button bgColor="bg-blue-300">削除する</Button>
              <Button bgColor="bg-pink-300">見ました</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
