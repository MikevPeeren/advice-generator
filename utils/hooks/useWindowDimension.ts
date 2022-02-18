import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  let width = undefined;
  let height = undefined;

  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;

    width = innerWidth;
    height = innerHeight;
  }

  return {
    width: typeof width !== "undefined" ? width : 0,
    height: typeof height !== "undefined" ? height : 0,
  };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}
