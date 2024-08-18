import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link to="/">Finance Tracker</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu - shown when `isMenuOpen` is true */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-blue-700">
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-white hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <SignedIn>
              <div className="px-4 py-2">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
