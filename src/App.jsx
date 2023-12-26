import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Landing_Page from "./components/LandingPage/Landing_Page";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const getStart = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const landingPageClass = `landing-page ${animateOut ? "zoom-out" : ""}`;
  return (
    <div>
      <NavBar onStartClick={getStart} />
      {isLoading ? (
        <Landing_Page onStartClick={getStart} className={landingPageClass} />
      ) : (
        <>
          <Body />
        </>
      )}
    </div>
  );
}
