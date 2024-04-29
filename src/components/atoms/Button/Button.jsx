const Button = ({ buttonName, className }) => {
  return (
    <button
      className={`${className} px-12 py-4 rounded-lg text-sm font-bold bg-violet-600 text-white hover:bg-violet-800 transition-all ease-in-out`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
