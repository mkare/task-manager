import { Route, Routes } from "react-router-dom";

import { BaseLayout, AuthLayout } from "@layouts/index";

import Home from "./Home";
import Auth from "./Auth";
import FullEdit from "./FullEdit";
import FullView from "./FullView";
import CreateTask from "./CreateTask";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/edit/:id" element={<FullEdit />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/view/:id" element={<FullView />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Auth />} />
      </Route>
    </Routes>
  );
}
