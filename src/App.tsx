import React from "react";
import Sidebar from "./components/Sidebar";
import NotesPage from "./components/NotesPage";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    // <Router>
    //   <Navbar />
    //   <AppRoutes />
    // </Router>
    <main className="lg:min-h-screen min-h-[100vmax] w-screen flex flex-row items-center justify-center bg-white">
      <Sidebar />
      <NotesPage />
    </main>
  );
};

export default App;
