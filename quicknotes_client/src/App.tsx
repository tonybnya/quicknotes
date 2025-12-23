import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/pages/Layout";
import Landing from "@/pages/Landing";
import Quicknotes from "@/pages/Quicknotes";
import AuthPage from "@/pages/AuthPage";

import NotFoundPage from "@/pages/NotFoundPage";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="accueil" element={<Landing />} />
            <Route path="quicknotes" element={<Quicknotes />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} /> */}

          {/* Main Website Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="accueil" element={<Landing />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="register" element={<AuthPage />} />
          </Route>

          {/* Dashboard/App Routes */}
          {/* We use a separate route or a flag for Quicknotes if you want to hide the landing footer */}
          <Route path="/quicknotes" element={<Quicknotes />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;