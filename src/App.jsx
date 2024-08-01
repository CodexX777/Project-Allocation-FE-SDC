import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Campaigns } from "./pages/CampaignPage/Campaigns";
import { Toaster } from "react-hot-toast";
import { Layout } from "./components/Layout";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen">
        <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="h-full">
            <Routes>
              <Route path="/" element={<Campaigns />} />
            </Routes>
          </div>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
