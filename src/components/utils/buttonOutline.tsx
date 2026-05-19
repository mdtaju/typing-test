import type { JSX } from "react";

function ButtonOutline({ title }: { title: string }): JSX.Element {
  return (
    <button className="px-2 py-1 border border-gray-text rounded-md text-sm text-semibold text-white focus:text-blue-500 cursor-pointer focus:outline focus:outline-blue-500 outline-offset-2">
      {title}
    </button>
  );
}

export default ButtonOutline;
