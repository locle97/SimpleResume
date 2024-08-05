import { useState } from "react";

export function Accordion({ title, expanded = false, children }) {
  const [isExpanded, setIsExpaned] = useState(expanded);

  let className = "transition-all duration-300 ease-in-out";
  className += !isExpanded ? " h-0 overflow-hidden" : " h-full";

  let svgClassName = "size-6 absolute right-0 pt-1 transition-transform";
  svgClassName += !isExpanded ? " rotate-180" : "";

  const handleExpand = () => {
    setIsExpaned(!isExpanded);
  };

  return (
    <div className="relative px-4">
      <h6 className="mb-0">
        <button
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
          data-collapse-target="animated-collapse-1"
          onClick={handleExpand}
        >
          <span>{title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={svgClassName}>
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </h6>
      <div
        data-collapse="animated-collapse-1"
        className={className}>
        {children}
      </div>
    </div>
  );
}

