import "./App.css"
import store from "./redux/store";
import {Provider} from "react-redux";
import TodoApp from "./components/TodoApp"
import Counter from "./components/Counter";
import Post from "./components/Post";

function App() {
  return (
      <Provider store={store}>
          <div className="App" >
              {/*<TodoApp/>*/}
              {/*<Counter/>*/}
              <Post/>
          </div>
      </Provider>
  );
}

export default App;
