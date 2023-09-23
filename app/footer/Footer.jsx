import {
  FaHome,
  FaUser,
  FaLaptop,
  FaBullseye,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">
                  <FaHome className="inline-block mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <FaUser className="inline-block mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLaptop className="inline-block mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBullseye className="inline-block mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#">
                <FaTwitter className="text-2xl text-blue-500 hover:text-blue-700" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl text-blue-500 hover:text-blue-700" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
              </a>
              <a href="#">
                <FaInstagram className="text-2xl text-blue-700 hover:text-blue-900" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          &copy; {new Date().getFullYear()} Code Crushers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
