import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto py-10">
        <div
          className="flex justify-between items-center text-white text-3xl"
        >
          <div
            className="flex items-center space-x-2"
          >
            <MdOutlineMail />
            <h4>bloobank@gmail.com</h4>
          </div>
          <div>
            <div className="text-4xl flex items-center space-x-3">
              <FaFacebook/>
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
