import ButtonOutline from "../utils/buttonOutline";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-text py-4 mt-12">
      <ul className="flex items-center divide-x divide-gray-text leading-4.5">
        <li className="pr-4 text-gray-text">
          WPM: <span className="font-bold text-white ml-2 text-xl">0</span>
        </li>
        <li className="px-4 text-gray-text">
          Accuracy: <span className="font-bold text-white ml-2 text-xl">0</span>
        </li>
        <li className="pl-4 text-gray-text">
          Time: <span className="font-bold text-white ml-2 text-xl">0</span>
        </li>
      </ul>
      <ul className="flex items-center divide-x divide-gray-text">
        <li className="flex items-center gap-4 text-gray-text pr-4">
          <span>Difficulty:</span>
          <ul className="flex items-center gap-2">
            <li>
              <ButtonOutline title="Easy" />
            </li>
            <li>
              <ButtonOutline title="Medium" />
            </li>
            <li>
              <ButtonOutline title="Hard" />
            </li>
          </ul>
        </li>
        <li className="flex items-center gap-4 text-gray-text pl-4">
          <span>Mode:</span>
          <ul className="flex items-center gap-2">
            <li>
              <ButtonOutline title="Timed (60s)" />
            </li>
            <li>
              <ButtonOutline title="Passage" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
