import Routes from "./src/routes/routes";
import { ThemeProvider } from "@react-navigation/native";

import theme from "./src/theme/theme";

export default function App() {
  return(
  <ThemeProvider value={theme}>
    <Routes />
  </ThemeProvider>

  ) 
}
