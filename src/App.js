import { Provider } from "react-redux";
import store from "./redux/store";
import Test from "./components/Test";

function App() {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
}

export default App;
