import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <MainContent />
      </div>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
