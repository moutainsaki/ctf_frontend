"use client"; 
// Tournament.js
import React from 'react';
import { useRouter } from 'next/navigation';

function Tournament({ number, title, startDate, endDate }) {
  const router = useRouter();
  const currentDate = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Determine tournament status
  const isUpcoming = currentDate < start;
  const isOngoing = currentDate >= start && currentDate <= end;

  // Set the status label and color based on the date
  const statusLabel = isOngoing ? '開催中' : isUpcoming ? '開催予定' : '終了';
  const statusColor = isOngoing ? 'bg-teal-400' : isUpcoming ? 'bg-blue-300' : 'bg-red-300';

  const handleClick = () => {
    router.push('/User_question');
  };

  return (
    <div className="flex items-center justify-center bg-teal-400 mt-5 p-1">
      <div
        className="w-full max-w-5xl p-8 mb-8 bg-white rounded-lg shadow-lg relative transform transition-transform duration-300 hover:scale-105"
        onClick={handleClick}
      >
        
        {/* Top section with tournament number and status */}
        <div className="flex items-center justify-between">
          <p className="text-4xl text-gray-500">問 {number} 回</p>

          <span
            className={`inline-block px-5 py-3 text-xl text-white rounded-full ${statusColor}`}
          >
            {statusLabel}
          </span>
        </div>

        {/* Centered tournament title */}
        <div className="flex items-center justify-center mb-5">
          <p className="text-6xl font-bold text-gray-800 text-center">{title}</p>
        </div>

        {/* Date positioned in the bottom-right corner */}
        <div className="absolute bottom-4 right-6">
          <p className="text-xl text-gray-500">
            {startDate} ~ {endDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tournament;
