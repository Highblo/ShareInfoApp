import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const Card: FC<Props> = (props) => {
  const { id, title, description, createdAt, updatedAt } = props;
  const navigate = useNavigate();

  const navigateThread = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <div
      key={id}
      onClick={() => navigateThread(id)}
      className="w-[32%] shadow-lg rounded-lg space-y-3 p-4 cursor-pointer bg-slate-200 hover:-translate-y-3 transition"
    >
      <div>
        <p className="font-bold">タイトル</p>
        <h3 className="line-clamp-1">{title}</h3>
      </div>
      <div>
        <p className="font-bold">内容</p>
        <p className="line-clamp-1">{description}</p>
      </div>
      <div>
        <p className="font-bold">作成日</p>
        <p className="line-clamp-1">{createdAt}</p>
      </div>
      <div>
        <p className="font-bold">更新日</p>
        <p className="line-clamp-1">{updatedAt}</p>
      </div>
    </div>
  );
};
