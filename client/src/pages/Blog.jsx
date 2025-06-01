import { useState } from "react";
import "../styles/Blog.css";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All" },
    { value: "research", label: "Research" },
    { value: "projects", label: "Projects" },
    { value: "portfolio", label: "Portfolio" },
    { value: "publications", label: "Publications" },
  ];

  const defaultBlogPosts = [
    {
      id: 1,
      title: "Deep Learning Optimization Techniques",
      excerpt: "Exploring advanced optimization algorithms for neural network training efficiency and convergence rates.",
      category: "research",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      createdAt: new Date("2024-12-15"),
    },
    {
      id: 2,
      title: "Smart Campus Navigation System",
      excerpt: "AI-powered indoor navigation using computer vision and sensor fusion for enhanced campus accessibility.",
      category: "projects",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      createdAt: new Date("2024-12-10"),
    },
    {
      id: 3,
      title: "Student Success Stories",
      excerpt: "Celebrating our members' achievements in AI competitions, internships, and research publications.",
      category: "portfolio",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      createdAt: new Date("2024-12-05"),
    },
    {
      id: 4,
      title: "Student Success Stories",
      excerpt: "Celebrating our members' achievements in AI competitions, internships, and research publications.",
      category: "publications",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      createdAt: new Date("2024-12-05"),
    },
  ];

  const filteredPosts = selectedCategory === "all"
    ? defaultBlogPosts
    : defaultBlogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Latest Insights</h1>
        <p>Explore our research, projects, and thought leadership in AI</p>
      </div>

      <div className="blog-categories">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`category-btn ${selectedCategory === category.value ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.imageUrl} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{formatDate(post.createdAt)}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="no-posts">No posts found in this category.</div>
        )}
      </div>
    </div>
  );
}
