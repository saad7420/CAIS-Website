import React from "react";
import "../styles/Blog.css";

export default function Blog() {
  const dummyPosts = [
    {
      id: 1,
      title: "The Future of AI in Education",
      summary: "Exploring how AI will revolutionize personalized learning and classroom dynamics.",
      date: "2024-06-01",
    },
    {
      id: 2,
      title: "Ethical Considerations in AI",
      summary: "Understanding the need for ethics, fairness, and transparency in AI systems.",
      date: "2024-06-01",
    },
    {
      id: 3,
      title: "Building Your First ML Model",
      summary: "A beginner-friendly guide to building and deploying a machine learning model.",
      date: "2024-06-01",
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">Latest Blog Posts</h2>
      <p className="blog-subtitle">Explore thoughts and insights from our members.</p>

      <div className="blog-grid">
        {dummyPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <span className="blog-date">📅 {post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
