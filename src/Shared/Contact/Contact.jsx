import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="bg-primary hidden md:block">
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center text-white text-3xl">
          <div className="flex items-center">
            <MdOutlineMail />
            <PiLineVertical />

            <h4>bloobank@gmail.com</h4>
          </div>
          <div>
            <div className="text-4xl flex items-center space-x-3">
              <div className="rounded-full bg-white p-1 text-red-500  duration-300  hover:text-primary">
                <FaFacebookF />
              </div>
              <div className="rounded-full bg-white p-1 text-red-500  duration-300  hover:text-primary">
                <FaInstagram />
              </div>
              <div className="rounded-full bg-white p-1 text-red-500  duration-300  hover:text-primary">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
