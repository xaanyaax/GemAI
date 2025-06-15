import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
