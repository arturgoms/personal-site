import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Internship - Motomco">
      The largest variety of grain meters with the best quality and price you can find here. Models certified and approved by InMetro. Access and make an online quote.
      </Step>
      <Step title="Internship - Tauron">
      Truck seller
      </Step>
    </ul>
    <Divider />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="2021 September-Present: Start to Working at Globant">
          <a href="https://www.globant.com">Globant </a>
          is an IT and Software Development company operating in Argentina, Colombia, Uruguay, the United Kingdom, Brazil, the United States, Canada, Peru, India, Mexico, Chile, Costa Rica, Ecuador, Spain, France, Germany, Romania and Belarus
        </Step>
        <Step title="NEAT Pygame Organisms">
          Its a experiment, how can little cells learn by it self how to walk around and eat to live.
        </Step>
        <Step title="Created the Python iOS APT for Jailbreak Repos">
          The idea was to have a command line tool that can get me the tweaks from whatever repository i want.
        </Step>
      </ul>

      <Year>2020</Year>
      <ul>
        <Step title="2020 Octuber-2021 September: Start to Working at Pixelwolf">
          <a href="https://pixelwolf.com.br">Pixelwolf </a>
          is a Brazilian company from Curitiba/PR, focused on high performance solutions development that are present and impacting positively people's routine.
        </Step>
        <Step title="2020 April-2021 Feb: Start to Working at Trade na Mão">
          <a href="https://tradenamao.com.br">Trade na Mão </a>
          is a Brazilian company from Curitiba/PR, focused on day trade and financial web applications.
        </Step>

        <Step title="2020 Jan-2021 March: Start to Working at Navegg">
          <a href="https://Navegg.com.br">Navegg </a>
          is a Brazilian company from Curitiba/PR, focused on get user data from sites.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Embedded Software Engineer at Alta Rail Technology">
          <a href="https://alta-rt.com">Alta Rail Technology </a>
          offers technological solutions that increase the profitability, productivity, and safety of railways operations.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
