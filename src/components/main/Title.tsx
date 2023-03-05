import { FC } from "react";

import { Button } from "../atom/Button";

export const Title: FC = () => {
  return (
    <div className="text-center space-y-3 mb-5">
      <h1 className="text-6xl font-bold">What to share?</h1>
      <p>
        ShareInfoは情報共有サービスです
        <br />
        スレッドを作成して皆と情報を共有しよう！
      </p>
      <Button bgColor="bg-green-300" url="create-thread">
        新規投稿
      </Button>
    </div>
  );
};
