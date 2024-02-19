import About from "./pages/about.js";
import Works from "./pages/works.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Error from "./pages/404.js"
import Zoap from "./pages/works/zoap.js";
import Quote from "./pages/works/quote.js";
import Posts from "./pages/posts.js";
import Industrial from "./pages/works/industrial.js";
import Calculator from "./pages/works/calculator.js";

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence initial={true} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="works/zoap" element={<Zoap />} />
        <Route path="works/quotes" element={<Quote />} />
        <Route path="works/calculator" element={<Calculator />} />
        <Route path="works/industrial" element={<Industrial />} />
        <Route path="*" element={<Error />} />  
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
