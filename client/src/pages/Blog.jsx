function Blog() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Latest Blog Posts</h2>
      <p className="text-center">Explore thoughts and insights from our members.</p>

      <div className="list-group">
        {[1, 2, 3].map((post) => (
          <a href="#" key={post} className="list-group-item list-group-item-action">
            <h5 className="mb-1">Blog Post Title {post}</h5>
            <p className="mb-1">Short description or summary of the post goes here...</p>
            <small>Posted on 2024-06-01</small>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blog;
