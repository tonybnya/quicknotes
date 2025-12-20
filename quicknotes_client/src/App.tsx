import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/pages/Layout";
import Landing from "@/pages/Landing";
import Quicknotes from "@/pages/Quicknotes";

import NotFoundPage from "@/pages/NotFoundPage";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="accueil" element={<Landing />} />
            <Route path="quicknotes" element={<Quicknotes />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;