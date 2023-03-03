function TrackingSubject({ title, data, timeFrame }) {
  //set timeFrameText based on timeFrame
  let timeFrameText;
  switch (timeFrame) {
    case "daily":
      timeFrameText = "Day";
      break;
    case "monthly":
      timeFrameText = "Month";
      break;
    case "weekly":
    default:
      timeFrameText = "Week";
  }
  // set background based on title
  let background;
  switch (title) {
    case "Work":
      background = "bg-workBg";
      break;
    case "Play":
      background = "bg-playBg";
      break;
    case "Study":
      background = "bg-studyBg";
      break;
    case "Exercise":
      background = "bg-exerciseBg";
      break;
    case "Social":
      background = "bg-socialBg";
      break;
    case "Self Care":
      background = "bg-selfCareBg";
      break;
    default:
      background = "bg-gray-600";
  }
  return (
    <div
      className={`${background} bg-subjectBgPs bg-no-repeat rounded-xl pt-10 md:pt-11 md:h-[100%] `}
    >
      <div className="bg-darkBlue rounded-xl text-gray-100 p-6 grid grid-cols-2 h-[100%] hover:bg-darkBlueHover hover:cursor-pointer">
        <p className="text-lg">{title}</p>
        <a
          href="#"
          aria-label="Learn More"
          className="text-right hover:brightness-125"
        >
          <img
            src="images/icon-ellipsis.svg"
            alt="Ellipsis"
            aria-hidden="true"
            className="inline-block"
          />
        </a>
        <p className="text-3xl font-thin mt-2 md:text-5xl md:mt-5">
          {data.current}hrs
        </p>
        <p className="text-right text-paleBlue text-sm mt-5 md:col-start-1 md:col-end-3 md:text-left md:mt-2">
          Last {timeFrameText} - {data.previous}hrs
        </p>
      </div>
    </div>
  );
}

export default TrackingSubject;
