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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">

          {/* Follow Us */}
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


          {/* terms and conditions, and faqs */}
          <div className="col-span-2 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>


          {/* NewsSteller */}
          <div className="col-span-2 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              News Steller
            </h2>
            <div className="flex space-x-4">
              {/* add an input to take input and sign up button  */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Subscribe to our newsletter
                </h3>
                <p className="text-gray-400">
                  Get the latest news and updates from us straight
                  to your inbox.
                </p>

                <form className="mt-4">
                  <input
                    type="email"
                    className="w-full text-gray-500 px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 mt-4"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
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
