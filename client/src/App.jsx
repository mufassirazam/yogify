import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Success from "./Success";
function App() {
  return (
    <>
      <Routes>
        <Route path="/success" element={<Success/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </>
  );
}

export default App;
