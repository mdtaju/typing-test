function DisplayInfo({
  title,
  number = "0",
  parentCss,
  numberColor,
}: {
  title: string;
  number: string;
  parentCss: string;
  numberColor: string;
}) {
  return (
    <li
      className={`pr-4 text-gray-text flex flex-col items-center md:flex-row ${parentCss}`}>
      <span>{title}:</span>{" "}
      <span
        style={{ color: numberColor }}
        className={`font-bold md:ml-2 text-3xl md:text-xl`}>
        {number}
      </span>
    </li>
  );
}

export default DisplayInfo;
