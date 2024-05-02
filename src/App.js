import { Provider } from "react-redux";
import "./App.css";
import Post from "./components/Post";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*<TodoApp/>*/}
        {/*<Counter/>*/}
        <Post />
      </div>
    </Provider>
  );
}

export default App;
