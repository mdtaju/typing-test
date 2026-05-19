import { useContext, useEffect, useRef, useState } from "react";
import ButtonOutline from "../utils/buttonOutline";
import DisplayInfo from "../utils/displayInfo";
import DropDownMenu from "./dropDownMenu";
import { SettingContext } from "../../context/SettingContext";

const modeOptions = ["Easy", "Medium", "Hard"];
const testModeOptions = ["Timed (60s)", "Passage"];

function Navbar() {
  const { setValue, time } = useContext(SettingContext);
  const [selectedOption, setSelectedModeOptions] = useState("easy");
  const [selectedTestModeOption, setSelectedTestModeOption] =
    useState("timed (60s)");
  const [open, setOpen] = useState(false);
  const [openTestMode, setOpenTestMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const TestDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (time === 0) {
      setValue?.((prev) => ({ ...prev, testStatus: false }));
    }
    if (time <= 0) return;
    const interval = setInterval(() => {
      setValue?.((prev) => ({
        ...prev,
        time: prev.time - 1,
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time, setValue]);

  useEffect(() => {
    setValue?.((prev) => ({
      ...prev,
      mode: selectedOption,
      testMode: selectedTestModeOption,
    }));
  }, [selectedOption, selectedTestModeOption, setValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
      if (
        TestDropdownRef.current &&
        !TestDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenTestMode(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between border-b border-gray-text py-4 mt-6 md:mt-12 gap-6">
      {/* wpm area start */}
      <ul className="flex items-center divide-x divide-gray-text leading-4.5">
        <DisplayInfo title="WPM" number="0" parentCss="" numberColor="white" />
        <DisplayInfo
          title="Accuracy"
          number="0%"
          parentCss="px-4"
          numberColor="#ca5263"
        />
        <DisplayInfo
          title="Time"
          number={`0.${time.toString()}`}
          parentCss="pl-4"
          numberColor="#f3dc72"
        />
      </ul>
      {/* mode area start */}
      <ul className="hidden lg:flex items-center divide-x divide-gray-text">
        <li className="flex items-center gap-4 text-gray-text pr-4">
          <span>Difficulty:</span>
          <ul className="flex items-center gap-2">
            <li
              className="cursor-pointer"
              onClick={() => setSelectedModeOptions("easy")}>
              <ButtonOutline title="Easy" />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setSelectedModeOptions("medium")}>
              <ButtonOutline title="Medium" />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setSelectedModeOptions("hard")}>
              <ButtonOutline title="Hard" />
            </li>
          </ul>
        </li>
        <li className="flex items-center gap-4 text-gray-text pl-4">
          <span>Mode:</span>
          <ul className="flex items-center gap-2">
            <li
              className="cursor-pointer"
              onClick={() => setSelectedTestModeOption("timed (60s)")}>
              <ButtonOutline title="Timed (60s)" />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setSelectedTestModeOption("passage")}>
              <ButtonOutline title="Passage" />
            </li>
          </ul>
        </li>
      </ul>
      {/* mode area for mobile view */}
      <ul className="flex lg:hidden gap-4">
        <li className="">
          <DropDownMenu
            open={open}
            setOpen={setOpen}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedModeOptions}
            options={modeOptions}
            dropdownRef={dropdownRef}
          />
        </li>
        <li className="">
          <DropDownMenu
            open={openTestMode}
            setOpen={setOpenTestMode}
            selectedOption={selectedTestModeOption}
            setSelectedOption={setSelectedTestModeOption}
            options={testModeOptions}
            dropdownRef={TestDropdownRef}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
