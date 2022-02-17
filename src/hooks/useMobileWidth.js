import { useEffect, useState } from "react";


const MOBILE_BREAKPOINT = 1200;


const useMobileWidth = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener(`resize`, handleResize);

    return window.removeEventListener(`resize`, handleResize);
  }, []);

  return isMobile;
};


export { useMobileWidth };
