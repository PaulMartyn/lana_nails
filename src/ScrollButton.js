import React, { useState, useEffect } from "react";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [atTop, setAtTop] = useState(true);

  // Update scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const bottomReached = window.innerHeight + window.scrollY >= document.body.scrollHeight;
    setAtTop(scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top or bottom
  const scrollPage = () => {
    if (window.scrollY === 0) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className="scroll-btn" onClick={scrollPage}>
      {window.scrollY === 0 ? "Go Down" : "Go Top"}
    </button>
  );
};

export default ScrollButton;
