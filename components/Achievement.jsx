import React from "react";
import Image from "next/image";

function Achievement(props) {
  const { cert1, cert2, cert3, certActive1, certActive2, certActive3 } = props;
  return (
    <div className="flex flex-1 flex-col mt-32 mb-20">
      <h1 className="text-6xl  font-semibold text-center">Achievements</h1>
      <div className="flex relative flex-col  items-center justify-center mt-10 ">

        <Image
          src="/hackathon.jpeg"
          alt="jed"
          width={11110}
          height={11100}
          ref={cert1}
          className={`about-img  rounded-lg w-[30rem] md:w-[35rem] xl:w-[40rem] transition `}
        />
        <p className="max-w-[80rem] text-justify indent-10 text-[1.25rem] sm:text-[1.55rem] lg:text-[1.75rem] mt-10">
          {`Our team created "Beacon," a career
          counseling application, during an 8-hour hackathon that addressed
          important issues in Philippine employment. Beacon creates customized
          career roadmaps based on user input and artificial intelligence to
          assist users in navigating their professional journeys. We won the
          hackathon and were recognized for our creative solution thanks to our
          teamwork, which included Maxell Milay heading development, Sheldon
          Arthur Sagrado concentrating on user experience, Louise Fermin
          Deiparine managing design, Arwin Delasan handling data analysis, and I
          which heads on testing and data management.`}
        </p>
      </div>
    </div>
  );
}

export default Achievement;
