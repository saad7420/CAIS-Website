function Members() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Team Members</h2>
      <p className="text-center">Meet the minds behind CAIS-COMSATS.</p>

      <div className="row">
        {[1, 2, 3].map((member) => (
          <div key={member} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={`https://source.unsplash.com/300x200/?person,ai,${member}`}
                className="card-img-top"
                alt="Team Member"
              />
              <div className="card-body">
                <h5 className="card-title">Member {member}</h5>
                <p className="card-text">Role: AI Enthusiast</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
