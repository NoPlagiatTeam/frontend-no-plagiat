const UserInput = ({ label, type }) => {
  return (
    <div>
      <label className="text-sm font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        className=" px-5 text-sm  text-gray-500 h-14 w-full rounded-lg border-2 border-gray-200 outline-2 outline-violet-400"
        id={label}
        type={type}
      />
    </div>
  );
};

export default UserInput;
