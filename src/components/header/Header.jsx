import DataContext from "../../context/DataContext";
import { useContext } from "react";

const Header = () => {
  const { questionCount } = useContext(DataContext);
  return (
    <>
      <div className="bg-teal-600 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-8 right-12 w-20 h-20 bg-white rounded-lg"></div>
          <div className="absolute top-12 right-32 w-16 h-16 bg-teal-400 rounded-full"></div>
        </div>

        <div className="relative z-10 flex justify-between items-start">
          <div className="max-w-[55%] ml-[100px]">
            <p className="text-lg mb-6 text-gray-900 font-medium leading-relaxed">
              A command tells someone to do something. It usually starts with a
              "bossy verb" word and can end with a full stop (.) or an
              exclamation mark (!)
            </p>

            <div className="flex ml-5">
              <p className="text-md font-medium text-white ">Examples:</p>
              <div className="flex flex-wrap gap-4 text-white">
                <span className="text-white font-semibold px-3  text-md">
                  Sit on the chair
                </span>
                <span className="text-white font-semibold px-3 text-md">
                  Wash your hands!
                </span>
                <span className="text-white font-semibold px-3  text-md">
                  Pass me the book.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 px-4 py-4 shadow-md">
            <p className="text-gray-800 font-bold text-sm tracking-wide">
              QUESTION {questionCount}/4
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
