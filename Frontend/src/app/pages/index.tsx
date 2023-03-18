// Styling and theming
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/chakra";

// Routes
import { BrowserRouter } from "react-router-dom";
import { AppRouteComponent } from "../components/app-route.component";

// State
import { Provider as StateProvider } from "react-redux";
import { store } from "../state";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <StateProvider store={store}>
        <BrowserRouter>
          <AppRouteComponent />
        </BrowserRouter>
      </StateProvider>
    </ChakraProvider>
  );
};
