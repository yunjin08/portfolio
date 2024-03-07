import React from 'react'

function EducationCard(props) {
    const {school, year, description} = props;
  return (
    <div className="precontent">
        <div className="content  rounded-xl space-y-4  p-10 relative">
        <p className="date text-[1.7rem]">&#9634; {year}</p>
        <p className="font-semibold text-[1.3rem] sm:text-[1.7rem] lg:text-[1.9rem]">
            {school}
        </p>
        <p className="text-[1.25rem] sm:text-[1.55rem] lg:text-[1.75rem]">
            {description}
        </p>
        </div>
    </div>
  )
}

export default EducationCard