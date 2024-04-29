const Errorbar = ({ erreur, message }) => {
  return (
    <>
      {erreur && (
        <div className="w-full bg-red-500 text-sm font-semibold text-white text-center py-2">
          {message}
        </div>
      )}
    </>
  );
};

export default Errorbar;
