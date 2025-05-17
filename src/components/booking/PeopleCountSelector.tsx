import React from 'react';

interface PeopleCountSelectorProps {
  peopleCount: number;
  minPeople: number;
  onPeopleCountChange: (count: number) => void;
}

const PeopleCountSelector: React.FC<PeopleCountSelectorProps> = ({
  peopleCount,
  minPeople,
  onPeopleCountChange,
}) => {
  const handleIncrement = () => {
    onPeopleCountChange(peopleCount + 1);
  };

  const handleDecrement = () => {
    if (peopleCount > minPeople) {
      onPeopleCountChange(peopleCount - 1);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Number of People</h3>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={peopleCount <= minPeople}
          className={`
            p-2 rounded-l-md border border-gray-300
            ${
              peopleCount <= minPeople
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="px-4 py-2 w-16 text-center border-t border-b border-gray-300 bg-white">
          {peopleCount}
        </div>
        <button
          type="button"
          onClick={handleIncrement}
          className="p-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="ml-4 text-sm text-gray-500">
          {peopleCount > minPeople && (
            <span>
              +{peopleCount - minPeople} additional {peopleCount - minPeople === 1 ? 'person' : 'people'} 
              (+ Rp{((peopleCount - minPeople) * 10000).toLocaleString('id-ID')})
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleCountSelector;