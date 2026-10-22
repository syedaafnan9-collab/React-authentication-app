import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 p-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 3, x: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LoginForm />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 3, x: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SignupForm />
      </motion.div>
    </div>
  );
}

export default App;
