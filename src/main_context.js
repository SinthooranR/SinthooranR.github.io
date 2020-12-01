import { createContext } from "react";

export const MainContext = createContext({
  theme: false,
  switchTheme: () => {},
});
