import {Helmet} from "react-helmet";
import "./_home.css";

const TITLE = "Home";

function Home() {
  
    return (
      <>
        <Helmet title={TITLE} />
        <h1>Clear as Vodka</h1>
        <p className="read-the-docs">
          Distilled from the heart
        </p>
      </>
    )
  }
  
  export default Home