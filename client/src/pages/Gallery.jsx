function Gallery() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Event Gallery</h2>
      <p className="text-center">Snapshots from our recent events.</p>

      <div className="row">
        {[1, 2, 3, 4].map((img) => (
          <div key={img} className="col-md-3 mb-4">
            <img
              src={`https://source.unsplash.com/300x200/?ai,event,${img}`}
              className="img-fluid rounded shadow-sm"
              alt={`Event ${img}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
