import { useContext, useEffect, useRef, useState } from "react";
import data from "../../data/data.json";
import { SettingContext } from "../../context/SettingContext";

interface TextData {
  id: string;
  text: string;
}

function TextArea() {
  const [loadedText, setLoadedText] = useState("");
  const { setValue, mode, testStatus } = useContext(SettingContext);
  const [typed, setTyped] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!testStatus) {
      return;
    }
    // if (e.key.length > 1 && e.key !== "Backspace") {
    //   return;
    // }

    if (e.key === "Backspace") {
      setTyped((prev) => prev.slice(0, -1));
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      return;
    }

    setTyped((prev) => prev + e.key);
    setCurrentIndex((prev) => prev + 1);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function getRandomText() {
      const textData: TextData[] = data[mode as keyof typeof data] || [];
      const randomIndex = Math.floor(Math.random() * textData.length);
      setLoadedText(textData[randomIndex].text);
    }
    getRandomText();
  }, [mode]);

  useEffect(() => {
    function updateTheTyped() {
      if (!testStatus) {
        setTyped("");
        setCurrentIndex(0);
      }
    }
    updateTheTyped();
  }, [testStatus]);

  const testStartHandler = () => {
    if (testStatus) {
      return;
    }
    inputRef.current?.focus();
    setValue?.((prev) => ({
      ...prev,
      testStatus: true,
      time: 60,
      wpm: 0,
      accuracy: 0,
    }));
  };
  return (
    <div className="pt-6 pb-8 min-h-100 relative">
      <div
        className={`absolute flex flex-col gap-2 items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ${testStatus ? "hidden" : ""}`}>
        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-semibold focus:outline-2  focus:outline-blue-600 outline-offset-2"
          onClick={testStartHandler}>
          Start Typing Test
        </button>
        <span className="text-white text-sm font-medium">
          Or click the text and start typing
        </span>
      </div>
      <p
        onClick={testStartHandler}
        className={`text-gray-text text-4xl leading-12 ${testStatus ? "" : "blur-xs"}`}>
        {loadedText.split("").map((char, index) => {
          let color = "";

          if (index < typed.length) {
            color =
              typed[index] === char
                ? "text-green-500"
                : "text-red-500 underline";
          }
          console.log(index);
          console.log(currentIndex);
          if (index === currentIndex) {
            color += " bg-gray-700/50";
          }

          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })}
      </p>
      <input
        ref={inputRef}
        type="text"
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        className="opacity-0 absolute"
        autoFocus
      />
    </div>
  );
}

export default TextArea;
