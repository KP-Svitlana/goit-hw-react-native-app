import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default App = () => {
  const routing = useRoute(false);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};
