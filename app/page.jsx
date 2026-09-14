"use client";

import { useEffect } from "react";
import AOS from "aos";
import App from "../src/App";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <App />;
}