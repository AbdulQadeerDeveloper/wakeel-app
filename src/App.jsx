import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./Components";
import Home from "./Pages/Home";
import { Preloader } from "./Components";
import BlogPost from "./Pages/BlogPost";
import NotFound from "./Pages/NotFound";
import { connectWithUs } from "./Data";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);


  return (
    <>
      <Preloader isLoading={isLoading} />

      {!isLoading && (
        <div className="base">
          <BrowserRouter>
            
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              {connectWithUs.map(post => (
                <Route key={post.link} path={post.link} element={<BlogPost post={post} />} />
              ))}

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
