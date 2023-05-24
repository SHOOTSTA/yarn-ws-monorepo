import "./App.css";

// Import the shared function into the `create-react-app` application
import { getSiteInfo } from "site-info";
import { getPlanetInfo } from "planet-info";

export default function App() {
  //Define a variable to get the values
  let siteInfo = getSiteInfo();
  let planetInfo = getPlanetInfo();
  return (
    <div className="App">
      {/*Output the site title and subtitle to the screen*/}
      <header className="App-header">
        <h1>{siteInfo.title}</h1>
        <p>{siteInfo.subtitle}</p>
        <p>{planetInfo.planet}</p>
      </header>
    </div>
  );
}
