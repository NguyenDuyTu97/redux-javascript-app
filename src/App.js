import { Provider } from "react-redux";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./App.css";
import Form from "./components/Form";
import store from "./redux/store";
import Post from "./components/Post";
import Chart from "./pages/Chart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Form />

        <div>
          ====================================================================
        </div>

        <Post /> */}

        <Chart />
      </div>
    </Provider>
  );
}

export default App;
