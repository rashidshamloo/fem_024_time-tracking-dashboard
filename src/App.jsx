import { useState } from "react";
import data from "./data/data.json";
import TrackingSubject from "./components/TrackingSubject";
import Profile from "./components/Profile";

function App() {
  // set timeFrame state so it can be manipulated and updated
  const [timeFrame, setTimeFrame] = useState("weekly");
  return (
    <>
      <main className="container mx-auto px-6 pt-10 grid grid-cols-1 gap-7 md:w-[69.25rem] md:h-[32.5rem] md:grid-cols-4 md:mx-0 md:p-0">
        <Profile timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
        {
          // map through data and show the TrackingSubject component based on the data and timeFrame
          data.map((item, index) => {
            return (
              <TrackingSubject
                key={index}
                title={item.title}
                data={item.timeframes[timeFrame]}
                timeFrame={timeFrame}
              />
            );
          })
        }
      </main>
      <footer className="mt-4 mb-2 text-gray-500 text-sm md:mb-0">
        <p>Developed by Rashid Shamloo</p>
        <ul className="flex gap-2 justify-center">
          <li>
            <a
              href="https://rashidshamloo.github.com"
              title="GitHub"
              target="_blank"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <i className="bi-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rashid-shamloo/"
              title="Linked-in"
              target="_blank"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <i className="bi-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rashidshamloo"
              title="Twitter"
              target="_blank"
              className="hover:text-gray-300 transition-all duration-300"
            >
              <i className="bi-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
