import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TodoListProvider from "./contexts/PostListContext";

function App() {
  return (
    <PostListProvider>
      <div className="container py-5">
        <Header />
        <Main />
      </div>
    </TPostListProvider>
  );
}

export default App;
