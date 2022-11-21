import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Covenants from "./pages/covenants"
import Garden from "./pages/garden"
import Creation from "./pages/creation"



export default function App() {
  
    return (
      <BrowserRouter>
        <Routes>
            <Route path="garden" element={<Garden />} />
            <Route path="covenants" element={<Covenants />} />
            <Route path="/" element={<Creation />}>
            <Route index element={<Creation />} />
            <Route path="*" element={<Creation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
  

