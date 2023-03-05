import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Thread } from "../pages/Thread";
import { CreateThread } from "../pages/CreateThread";
import { Page404 } from "../pages/Page404";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Thread />} />
      <Route path="/create-thread" element={<CreateThread />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};
