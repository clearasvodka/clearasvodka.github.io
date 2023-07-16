import {Helmet} from "react-helmet";
import "./_bookshelf.css";

const TITLE = "Books";

function BookShelf() {
  
    return (
      <>
        <Helmet title={TITLE} />
        <h1>Books</h1>
        <p className="read-the-docs">
          Book collection
        </p>
      </>
    )
  }
  
  export default BookShelf