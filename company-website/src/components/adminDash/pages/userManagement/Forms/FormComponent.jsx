import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import ThirdPartyForm from "./ThirdPartyForm";
import { motion } from "framer-motion";

const FormComponent = () => {
  const [formState, setFormState] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Animated Button Wrapper */}
      <div className="relative flex items-center w-fit mx-auto p-1 bg-gray-100 shadow-lg rounded-full">
        {/* Sliding Background */}
        <motion.div
          className="absolute w-1/2 h-full bg-blue-400 rounded-full"
          initial={{ x: 0 }}
          animate={{ x: formState ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Employee Button */}
        <motion.button
          onClick={() => setFormState(true)}
          className="relative z-10 py-2 px-6 rounded-full transition-all duration-300"
          whileTap={{ scale: 0.9 }}
          animate={{
            color: formState ? "#ffffff" : "#000000",
          }}
        >
          Employee
        </motion.button>

        {/* Company Button */}
        <motion.button
          onClick={() => setFormState(false)}
          className="relative z-10 py-2 px-6 rounded-full transition-all duration-300"
          whileTap={{ scale: 0.9 }}
          animate={{
            color: !formState ? "#ffffff" : "#000000",
          }}
        >
          Company
        </motion.button>
      </div>

      {/* Animated Form Transition */}
      <motion.div
        key={formState ? "employee" : "company"}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full"
      >
        {formState ? <EmployeeForm /> : <ThirdPartyForm />}
      </motion.div>
    </div>
  );
};

export default FormComponent;
