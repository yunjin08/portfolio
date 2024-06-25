import React from 'react'

function EducationCard(props) {
    const {school, year, description} = props;
    console.log(description);
  return (
    <div className="precontent">
        <div className="content  rounded-xl space-y-4  p-10 relative">
        <p className="date text-[1.7rem]">&#9634; {year}</p>
        <p className="font-semibold text-[1.3rem] sm:text-[1.7rem] lg:text-[1.9rem]">
            {school}
        </p>
        <ul>
        {description && description.map((desc, index) => (
          <li key={index} className="text-[1.25rem] py-1 sm:text-[1.55rem] lg:text-[1.75rem]">
              &#x2022; {desc}
          </li>
        ))}
        </ul>
        </div>
    </div>
  )
}

export default EducationCard