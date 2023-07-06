import { Provider } from "react-redux";
import { store } from "./redux/store";

import Main from "./Components/Main";

export default App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
