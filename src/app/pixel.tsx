'use client'

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const Pixel = () => {
    useEffect(() => {
      const pixelId = "959172412385821";
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }, []);
    return null;
  };
  export default Pixel;