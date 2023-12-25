import "./bookShelf.css";
export default function Page() {
  return (
    <main>
      <h1>Bookshelf</h1>
      <p>
        The collection of books, magazines, comics, etc somehow influenced the
        way I behave
      </p>
      <div className="bookshelf">
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
          <div className="book-id">
            <div className="mono">
              ISBN-13
              <br />
              978-1328518903
            </div>
          </div>
          <div className="book-author">
            <ul>
              <li>Adam Rogers</li>
            </ul>
          </div>
          <div className="book-title">
            <h2>Full Spectrum: How the Science of Color Made Us Modern</h2>
          </div>
          <div className="book-category">
            <h6>Design</h6>
          </div>
        </div>

        <div className="book">
          <div className="book-id">
            <div className="mono">
              ISBN-13
              <br />
              978-1138365292
            </div>
          </div>
          <div className="book-author">
            <ul>
              <li>David Travis</li>
            </ul>
          </div>
          <div className="book-title">
            <h2>Think Like a UX Researcher</h2>
          </div>
          <div className="book-category">
            <h6>Research</h6>
          </div>
        </div>

        <div className="book">
          <div className="book-id">
            <div className="mono">
              ISBN-13
              <br />
              978-0374533557
            </div>
          </div>
          <div className="book-author">
            <ul>
              <li>Daniel Kahneman</li>
            </ul>
          </div>
          <div className="book-title">
            <h2>Thinking, Fast and Slow</h2>
          </div>
          <div className="book-category">
            <h6>Science</h6>
          </div>
        </div>

        <div className="book">
          <div className="book-id">
            <div className="mono">
              ISBN-13
              <br />
              979-8387293078
            </div>
          </div>
          <div className="book-author">
            <ul>
              <li>William Strunk Jr.</li>
              <li>Elwyn White</li>
            </ul>
          </div>
          <div className="book-title">
            <h2>The Elements of Style</h2>
          </div>
          <div className="book-category">
            <h6>Writing</h6>
          </div>
        </div>

        <div className="book">
          <div className="book-id">
            <div className="mono">
              ISBN-13
              <br />
              978-0226287058
            </div>
          </div>
          <div className="book-author">
            <ul>
              <li>
                The University of Chicago
                <br />
                Press Editorial Staff
              </li>
            </ul>
          </div>
          <div className="book-title">
            <h2>The Chicago Manual of Style</h2>
          </div>
          <div className="book-category">
            <h6>Writing</h6>
          </div>
        </div>
      </div>
    </main>
  );
}
