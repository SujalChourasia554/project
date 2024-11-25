import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SetStateAction, useState } from "react";

interface SubLocationButtonDropdownProps {
  onChange: (value: string) => void; // Define the type of the onChange prop
}

export default function SubLocationButtonDropdown({
  onChange,
}: SubLocationButtonDropdownProps) {
  const subLocationList = [
    { id: "1", name: "Sub Location" },
    { id: "2", name: "Bayonne" },
    { id: "3", name: "Greenville" },
    { id: "4", name: "Manhattan" },
    { id: "5", name: "Queens" },
    { id: "6", name: "The Heights" },
    { id: "7", name: "Upper East Side" },
    { id: "8", name: "West Side" },
  ];

  const [selectedSubLocation, setSelectedSubLocation] = useState(
    subLocationList[0]
  );

  const handleSubLocationSelect = (subLocation: { id: string; name: string }) => {
    setSelectedSubLocation(subLocation);
    onChange(subLocation.name); // Notify the parent of the new selection
  };

  return (
    <Menu as="div" className="relative inline-block text-left w-full group">
      <div className="flex flex-row">
        <MenuButton className="inline-flex w-full items-center text-nowrap bg-white px-3 py-4 text-base font-bold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline group-hover:outline group-hover:outline-blue-200 focus:outline-blue-200">
          <div className="flex flex-row items-center">
            <svg
              className="size-4 mx-2 text-color-orange"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." />
            </svg>
            {selectedSubLocation.name}
          </div>
          <div className="w-full flex justify-end">
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-800 " />
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 w-full rounded-md border border-black/50 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
      >
        <div className="py-1">
          {subLocationList.map((list) => (
            <MenuItem key={list.id}>
              <a
                href="#"
                className="block pl-10 text-base font-poppins text-black hover:bg-blue-500 hover:text-white"
                onClick={() => handleSubLocationSelect(list)}
              >
                {list.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
