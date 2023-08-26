import "./bookShell.css";
export default function Page() {
  return (
    <main>
      <h1>Bookshell</h1>
      <div className="bookshell">
        <div className="book">
          <div className="book-id">
            <div className="mono">
              ISBN-13
              <br />
              978-1491911686
            </div>
          </div>
          <div className="book-author">
            <ul>
              <li>Louis Rosenfeld</li>
              <li>Peter Morville</li>
              <li>Jorge Arango</li>
            </ul>
          </div>
          <div className="book-title">
            <h2>Information Architecture: For the Web and Beyond</h2>
          </div>
          <div className="book-category">
            <h6>Design</h6>
          </div>
        </div>

        <div className="book">
          <div className="book-author">
            Louis Rosenfeld, Peter Morville, Jorge Arango
          </div>
          <div className="book-title">
            <h2>Title</h2>
          </div>
          <div className="book-category">Category</div>
        </div>
        <div className="book">Book</div>
        <div className="book">Book</div>
      </div>
    </main>
  );
}
