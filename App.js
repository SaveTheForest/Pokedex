import Routes from "./src/routes/routes";
import { ThemeProvider } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "react-query";
import theme from "./src/theme/theme";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>

  )
}
