const Button = ({ buttonName, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        className ? className : "bg-violet-600  hover:bg-violet-800"
      } px-12 py-3 rounded-lg text-sm font-bold  text-white transition-all ease-in-out`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
