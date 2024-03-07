import React from "react";
import Image from "next/image";

function Certificates(props) {
  const { cert1, cert2, cert3, certActive1, certActive2, certActive3 } = props;
  return (
    <div className="flex flex-1 flex-col mt-24 mb-20">
      <h1 className="text-6xl  font-semibold text-center">Certificates</h1>
      <div className="flex flex-col xxl:flex-row space-y-10 xxl:space-y-0 items-center mt-10 lg:space-x-24">
        <div className="flex  flex-col items-center space-y-10 justify-center blg:space-x-24   blg:flex-row blg:space-y-0">
          <Image
            src="/ecom.png"
            alt="jed"
            width={410}
            height={110}
            ref={cert1}
            className={`about-img object-cover rounded-lg ${
              certActive1 && "scale-[1.1] duration-500"
            } transition `}
          />
          <Image
            src="/start.png"
            alt="jed"
            ref={cert2}
            width={410}
            height={110}
            className={`about-img object-cover rounded-lg transition ${
              certActive2 && "scale-[1.1] duration-500"
            }`}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/tech.png"
            alt="jed"
            ref={cert3}
            width={410}
            height={110}
            className={`about-img object-cover rounded-lg ${
              certActive3 && "scale-[1.1] duration-500"
            } transition`}
          />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
