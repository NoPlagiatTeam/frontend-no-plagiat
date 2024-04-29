const Icon = ({ icon, onClick, isDark }) => {
  return (
    <button
      onClick={onClick}
      className={`h-8 w-8 ${
        isDark
          ? "bg-gray-600 hover:bg-gray-900"
          : " bg-gray-400 hover:bg-gray-500"
      }  rounded-full flex items-center justify-center  transition-all ease-in-out`}
    >
      {icon}
    </button>
  );
};

export default Icon;
