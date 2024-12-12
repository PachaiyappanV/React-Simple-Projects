import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const handleScroll = () => {
    const totalScrollbleHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled =
      (document.documentElement.scrollTop / totalScrollbleHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Scrollbar Indicator */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-green-500 z-20"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
