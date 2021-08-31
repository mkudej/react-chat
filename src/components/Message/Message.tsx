import React from "react";

export default function Message() {
  return (
    <div className="flex text-white mb-5">
      <div
        style={{
          backgroundImage:
            "url(https://c.tenor.com/JvArM7ZO5JIAAAAM/bavatogay-ricardo-milos.gif)",
        }}
        className="bg-red bg-cover w-10 h-10 rounded-full flex-shrink-0"
      ></div>
      <div className="ml-5">
        <div className="flex items-baseline mb-1">
          <div className="text-lg font-bold mr-5">Shaunna Firth</div>
          <div className="text-sm">today at 1:29 PM</div>
        </div>
        <div className="text-lg">
          Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis
          neque condimentum aliquet. Phasellus consequat et justo eu accumsan
          🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel
          mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque
          eget massa 🤣
        </div>
      </div>
    </div>
  );
}
