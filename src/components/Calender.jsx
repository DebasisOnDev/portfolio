import React, { useState } from "react";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="h-[80vh] px-2 py-1 border-[0.03px] border-gray-500">
      <h1 className="text-3xl font-bold text-white mb-6 pl-2 ">Calendar </h1>

      <div className="bg-white h-auto  py-8 px-4  rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handlePrevMonth}
          >
            &lt; Prev
          </button>
          <h2 className="text-xl font-semibold">
            {date.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleNextMonth}
          >
            Next &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-gray-600">
              {day}
            </div>
          ))}

          {Array.from({ length: 35 }).map((_, index) => {
            const currentDate = new Date(date);
            currentDate.setDate(index + 1 - date.getDay());

            return (
              <div
                key={currentDate.toString()}
                className={`text-center p-2  rounded-full ${
                  currentDate.getMonth() === date.getMonth()
                    ? "hover:bg-gray-200"
                    : "text-gray-400"
                }`}
              >
                {currentDate.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
