import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import store from "./store";
import { GlobalStyles } from "./styled/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
