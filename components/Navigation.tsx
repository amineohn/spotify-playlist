import { useTheme } from "next-themes";
import { useRouter } from "next/router";
const Navigation = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white dark:bg-black md:my-8 dark:text-gray-100">
      <ToggleTheme />
      <div>
        <a
          onClick={() => router.push("/")}
          className="p-1 font-normal  text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-25"
        >
          Home
        </a>
      </div>
    </div>
  );
};

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const getNextTheme = (): string => {
    if (theme === "dark") return "light";
    if (theme === "light") return "system";
    return "dark";
  };

  return (
    <button
      type="button"
      className="w-10 h-10"
      onClick={() => setTheme(getNextTheme())}
    >
      {(() => {
        switch (theme) {
          case "dark":
            return <span className="text-xl">&#127762;</span>;
          case "system":
            return <span className="text-xl">&#127763;</span>;
          case "light":
            return <span className="text-xl">&#127765;</span>;
          default:
            return "system";
        }
      })()}
    </button>
  );
};

export default Navigation;
