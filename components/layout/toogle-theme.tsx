import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Button } from "../ui/button";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      <div className="flex gap-2 dark:hidden">
        <FaMoon className="size-5" />
        <span className="block lg:hidden"> Dark </span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <FaSun className="size-5" />
        <span className="block lg:hidden">Light</span>
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
