import React, { useEffect } from "react";
import "./ScrollButton.css";

const ScrollButton = () => {

  const handleScroll = () => {
    // You can keep this empty if you're not tracking state
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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