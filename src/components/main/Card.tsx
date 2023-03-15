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

  const navigateThread = () => {
    navigate(id, { state: id });
  };

  return (
    <div
      key={id}
      onClick={navigateThread}
      className="shadow-xl rounded-xl space-y-1 mb-4 p-4 cursor-pointer bg-white hover:-translate-y-2 transition md:w-[32%]"
    >
      <div>
        <p className="font-bold">タイトル</p>
        <h3 className="line-clamp-1">{title}</h3>
      </div>
      <div className="hidden md:block">
        <p className="font-bold">内容</p>
        <p className="line-clamp-1">{description}</p>
      </div>
      <div>
        <p className="font-bold">作成日</p>
        <p className="line-clamp-1">{createdAt}</p>
      </div>
      <div className="hidden md:block">
        <p className="font-bold">更新日</p>
        <p className="line-clamp-1">{updatedAt}</p>
      </div>
    </div>
  );
};
