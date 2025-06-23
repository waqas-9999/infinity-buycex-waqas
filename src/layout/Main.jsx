import { useEffect, useState } from "react";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import { IoIosArrowUp } from "react-icons/io";


const Main = props => {
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
		if (window.scrollY > 300) {
		  setShowArrow(true);
		} else {
		  setShowArrow(false);
		}
	  };
  
	  window.addEventListener("scroll", handleScroll);
  
	  return () => {
		window.removeEventListener("scroll", handleScroll);
	  };
	}, []);
	return (
		<>
			<div className="flex items-center justify-center">
				<div className="w-full bg-image">
				{showArrow && (
            <a href="#">
              <IoIosArrowUp
                size={40}
                type="button"
                className="p-2 cursor-pointer  z-50  hidden lg:inline-block fixed bottom-8 right-8 border-2 rounded-full text-white shadow shadow-[#df9965]"
              />
            </a>
          )}
				{props.children}
				<Footer/>
				</div>
			</div>

		</>
	);
};

export default Main;
