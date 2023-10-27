import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import QuestionPage from "./components/QuestionPage";
import store from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="">
          <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/liveEvent" element={<QuestionPage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
