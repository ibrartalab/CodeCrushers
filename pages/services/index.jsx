import { motion } from "framer-motion";
import { FaCode, FaLaptop, FaCloud, FaPen, FaCheck } from "react-icons/fa";
import Navbar from "../../app/navbar/Navbar";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-8 min-h-screen"
      >
          <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Software Development"
            icon={<FaCode className="text-5xl text-blue-600 mb-4" />}
            description="We craft custom software solutions to meet your unique needs."
          />

          <ServiceCard
            title="Web & Mobile App Development"
            icon={<FaLaptop className="text-5xl text-blue-600 mb-4" />}
            description="We build responsive and user-friendly web and mobile apps."
          />

          <ServiceCard
            title="Cloud Solutions"
            icon={<FaCloud className="text-5xl text-blue-600 mb-4" />}
            description="We offer scalable cloud services to power your business."
          />

          <ServiceCard
            title="UI/UX Design"
            icon={<FaPen className="text-5xl text-blue-600 mb-4" />}
            description="Our designers create intuitive and appealing user interfaces."
          />

          <ServiceCard
            title="Quality Assurance & Testing"
            icon={<FaCheck className="text-5xl text-blue-600 mb-4" />}
            description="We ensure the quality and reliability of your software."
          />
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ title, icon, description }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      {icon}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
