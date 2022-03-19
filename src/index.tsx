import ReactDOM from "react-dom";
import { fetchAllCountries } from "./countriesService";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <App fetchAllCountries={fetchAllCountries} />,
  document.getElementById("root")
);
