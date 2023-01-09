import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { GithubProvider } from "./Context/GithubContext";
import { AlertProvider } from "./Context/AlertContext";
/* Importing Local Components Starts */
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";
import Alert from "./Components/Layout/Alert";
import UserDetails from "./Pages/UserDetails";
/* Importing Local Components Ends */

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router className="App">
          <div className="flex flex-col justify-between h-screen">
            <Routes>
              <Route path="/" element={<Navbar />} />
              <Route path="/about" element={<Navbar />} />
              <Route path="/user/:login" element={<Navbar />} />
            </Routes>

            <main className="container mx-auto px-3 pb-12">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:login" element={< UserDetails/>} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Error404 />} />
              </Routes>
            </main>

            <Routes>
              <Route path="/" element={<Footer />} />
              <Route path="/about" element={<Footer />} />
              <Route path="/user/:login" element={<Footer />} />
            </Routes>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
