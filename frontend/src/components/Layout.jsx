import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <main className="container mx-auto px-4 py-8">
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </main>
  </div>
);

export default Layout;
