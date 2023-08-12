export default function Page() {
  return (
    <main>
      <h1>Bookshell</h1>
      <div className="bookshell">
        <div className="book">
          <div className="book-author">Author</div>
          <div className="book-title">
            <h2>Title</h2>
          </div>
          <div className="book-category">Category</div>
        </div>
        <div className="book">
          <div className="book-author">Author</div>
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
