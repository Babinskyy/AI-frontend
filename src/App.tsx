import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { useAuth } from "./context/AuthContext";

function App() {
  const auth = useAuth();
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && <Route path="/chat" element={<Chat />} />}
        <Route path="*" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
