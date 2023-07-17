import { Helmet } from "react-helmet";
import "./_bookshelf.css";

const TITLE = "Books";

function BookShelf() {
  return (
    <>
      <Helmet title={TITLE} />
      <h1>Books</h1>
      <p className="read-the-docs">Book collection</p>
      <main>
        <div className="book">
          <div className="book-id">ISBN 978-1491911686</div>
          <div className="book-title-serif">
            Information Architecture: For the Web and Beyond
          </div>
          <div className="book-author">
            Louis Rosenfeld, Peter Morville, Jorge Arango{" "}
          </div>
          <div className="book-label">Book Label</div>
        </div>
      </main>
    </>
  );
}

export default BookShelf;
