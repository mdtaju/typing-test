import { createContext, useState, type FC, type ReactNode } from "react";

interface SettingContextValue {
  mode: string;
  testMode: string;
  wpm?: number;
  accuracy?: number;
  time: number;
  testStatus: boolean;
  setValue?: React.Dispatch<React.SetStateAction<SettingContextValue>>;
}

const defaultSettings: SettingContextValue = {
  mode: "easy",
  testMode: "timed (60s)",
  wpm: 0,
  accuracy: 0,
  time: 0,
  testStatus: false,
};

const SettingContext = createContext<SettingContextValue>(defaultSettings);

type SettingProviderType = FC<{ children: ReactNode }>;

const SettingProvider: SettingProviderType = ({ children }) => {
  const [value, setValue] = useState<SettingContextValue>(defaultSettings);
  return (
    <SettingContext.Provider value={{ ...value, setValue }}>
      {children}
    </SettingContext.Provider>
  );
};

export { SettingProvider, SettingContext };
