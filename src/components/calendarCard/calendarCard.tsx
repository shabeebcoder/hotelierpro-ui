import React from 'react';

function CalendarCard({
    name,
    textColor,
    bgColor,
    iconColor,
    countColor,
    width,
    height,
    userCount,
    nightsCount,
}) {
    return (
        <div
            className={`text-${textColor} bg-${bgColor} border-l-2 border-${textColor} w-[${width}] h-[${height}] p-2 space-y-1`}
        >
            <p className="text-lg">{name}</p>
            <p className="font-semibold flex gap-4">
                <span className={`text-${countColor} flex gap-1 items-center`}>
                    <svg
                        className={`w-3 h-3  dark:text-white text-${iconColor}   `}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 14 18"
                    >
                        <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    {userCount}
                </span>
                <span className={`text-${countColor} flex gap-1 items-center`}>
                    <svg
                        className={`w-3 h-3 text-${iconColor} dark:text-white`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                    >
                        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
                    </svg>
                    {nightsCount}
                </span>
            </p>
        </div>
    );
}

export default CalendarCard;
