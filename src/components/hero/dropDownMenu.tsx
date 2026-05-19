import IconDownArrow from "../../assets/images/icon-down-arrow.svg";

function DropDownMenu({
  dropdownRef,
  open,
  setOpen,
  selectedOption,
  setSelectedOption,
  options,
}: {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}) {
  return (
    <div className="relative inline-block text-white" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-3 min-w-30 rounded-md border border-gray-text px-4 py-2 text-sm transition">
        <span>{selectedOption}</span>
        <img
          src={IconDownArrow}
          alt="dropdown"
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-full rounded-md border border-zinc-700 bg-[#262626] shadow-xl overflow-hidden z-50">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 px-4 py-3 text-sm cursor-pointer hover:bg-zinc-800 transition border-b border-zinc-700 text-nowrap last:border-0">
              <input
                type="radio"
                name="difficulty"
                value={option}
                checked={selectedOption === option}
                onChange={() => {
                  setSelectedOption(option);
                  setOpen(false);
                }}
                className="h-4 w-4 accent-blue-500 bg-transparent border-zinc-500"
              />
              <span className="text-nowrap">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
