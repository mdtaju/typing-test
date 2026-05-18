function ButtonOutline({ title }: { title: string }) {
  return (
    <button className="px-2 py-1 border border-gray-text rounded-md text-sm text-semibold text-white focus:text-blue-500 cursor-pointer focus:outline focus:outline-blue-500">
      {title}
    </button>
  );
}

export default ButtonOutline;
