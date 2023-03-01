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
  // set background color and icon based on title
  let backgroundColor, backgroundIcon;
  switch (title) {
    case "Work":
      backgroundColor = "bg-lightRedW";
      backgroundIcon = "bg-[url('/images/icon-work.svg')]";
      break;
    case "Play":
      backgroundColor = "bg-softBlue";
      backgroundIcon = "bg-[url('/images/icon-play.svg')]";
      break;
    case "Study":
      backgroundColor = "bg-lightRedS";
      backgroundIcon = "bg-[url('/images/icon-study.svg')]";
      break;
    case "Exercise":
      backgroundColor = "bg-limeGreen";
      backgroundIcon = "bg-[url('/images/icon-exercise.svg')]";
      break;
    case "Social":
      backgroundColor = "bg-violet";
      backgroundIcon = "bg-[url('/images/icon-social.svg')]";
      break;
    case "Self Care":
      backgroundColor = "bg-softOrange";
      backgroundIcon = "bg-[url('/images/icon-self-care.svg')]";
      break;
    default:
      backgroundColor = "bg-gray-600";
  }
  return (
    <div
      className={`${backgroundColor} ${backgroundIcon} bg-no-repeat bg-[top_-0.35rem_right_1rem] rounded-xl pt-10 md:pt-11 md:h-[100%]`}
    >
      <div className="bg-darkBlue rounded-xl text-gray-100 p-6 grid grid-cols-2 h-[100%] relative bottom-[-0.1rem] hover:bg-darkBlueHover hover:cursor-pointer">
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
