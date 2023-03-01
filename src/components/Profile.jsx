function Profile({ timeFrame, setTimeFrame }) {
  // sets aria-current="page" for the passed element and removes it from others
  function setAriaCurrent(element) {
    //remove aria-current="page" from other elements
    for (let ele of element.parentNode.children) {
      if (element != ele) ele.removeAttribute("aria-current");
    }
    // add aria-current="page" to the current element
    element.setAttribute("aria-current", "page");
  }

  return (
    <div className="md:row-start-1 md:row-end-3 bg-darkBlue rounded-xl md:flex md:flex-col">
      <div className="bg-blue rounded-xl flex p-8 items-center md:flex-col md:items-start md:flex-1">
        <img
          src="images/image-jeremy.png"
          alt="Jeremy"
          aria-hidden="true"
          className="w-[4.5rem] h-[4.5rem] border-[3px] border-gray-100 rounded-full md:w-[5.5rem] md:h-[5.5rem]"
        />
        <div className="flex-col ml-4 md:ml-0 md:mt-9">
          <p className="text-paleBlue text-sm">Report for</p>
          <p className="text-2xl text-gray-100 font-light md:text-4xl">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div
        role="navigation"
        className="flex justify-between items-center text-desaturatedBlue px-8 py-4 text-lg md:flex-col md:items-start md:gap-3 md:py-7"
      >
        <a
          href="#"
          onClick={(e) => {
            setTimeFrame("daily");
            setAriaCurrent(e.target);
          }}
          // if timeFrame is daily, set text color to white (active)
          className={
            timeFrame === "daily" ? "text-gray-100" : "" + "hover:text-gray-100"
          }
        >
          Daily
        </a>
        <a
          href="#"
          onClick={(e) => {
            setTimeFrame("weekly");
            setAriaCurrent(e.target);
          }}
          // if timeFrame is weekly, set text color to white (active)
          className={
            timeFrame === "weekly"
              ? "text-gray-100"
              : "" + "hover:text-gray-100"
          }
          aria-current="page"
        >
          Weekly
        </a>
        <a
          href="#"
          onClick={(e) => {
            setTimeFrame("monthly");
            setAriaCurrent(e.target);
          }}
          // if timeFrame is monthly, set text color to white (active)
          className={
            timeFrame === "monthly"
              ? "text-gray-100"
              : "" + "hover:text-gray-100"
          }
        >
          Monthly
        </a>
      </div>
    </div>
  );
}

export default Profile;
