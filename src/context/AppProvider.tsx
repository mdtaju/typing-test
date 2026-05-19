import { SettingProvider } from "./SettingContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <SettingProvider>{children}</SettingProvider>;
};

export default AppProviders;
