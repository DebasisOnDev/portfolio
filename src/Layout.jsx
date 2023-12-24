import { motion, AnimatePresence } from "framer-motion";
import Top from "./Top";
import Bottom from "./Bottom";
import DisplayTop from "./DisplayTop";

const routeVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Layout = ({ children, location }) => {
  return (
    <AnimatePresence mode="wait">
      <div
        key={Math.random()}
        className=" px-4 py-3 bg-black hidden sm:flex sm:items-center  h-screen w-full text-6xl font-semibold text-gray-600  sm:justify-center"
      >
        Kindly switch to the mobile mode , I assure it will worth it
      </div>
      <div className="bg-black rounded-[2.5px] sm:hidden">
        <Top />
        <DisplayTop />

        <motion.main
          key={location.pathname}
          variants={routeVariants}
          initial="initial"
          animate="final"
          exit="exit"
        >
          {children}
        </motion.main>

        <Bottom />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
