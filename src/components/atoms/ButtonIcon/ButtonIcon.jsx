import { themeCtx } from "../../../context/ThemeContext";

const ButtonIcon = ({
  title,
  icon,
  bg,
  onClick,
  diseable,
  size,
  isloading,
}) => {
  const darkCtx = themeCtx();

  return (
    <>
      {!isloading && (
        <button
          disabled={diseable}
          onClick={onClick}
          className={`flex items-center ${
            size ? size : "px-12"
          } py-2  text-[12px] gap-3 ${
            !diseable && "hover:bg-slate-600"
          } transition-all ease-in-out ${
            bg
              ? bg + " text-white"
              : `border border-gray-300 ${
                  darkCtx.isDark
                    ? "bg-[#212121] text-white"
                    : "bg-gray-200 text-gray-600"
                }`
          }`}
        >
          {title}
          {icon && icon}
        </button>
      )}
      {isloading && (
        <button
          disabled={true}
          onClick={onClick}
          className={`flex items-center px-20 py-2  text-[12px] gap-3 ${
            !diseable && "hover:bg-slate-600"
          } transition-all ease-in-out ${
            bg
              ? bg + " text-white"
              : `border border-gray-300 ${
                  darkCtx.isDark
                    ? "bg-[#212121] text-white"
                    : "bg-gray-200 text-gray-600"
                }`
          }`}
        >
          <span className="loader"></span>
        </button>
      )}
    </>
  );
};

export default ButtonIcon;
