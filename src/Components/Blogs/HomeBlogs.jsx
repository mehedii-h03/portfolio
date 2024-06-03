import { Link } from "react-router-dom";
import "./blog.css"
import { useEffect, useState } from "react";



const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://server-five-inky-48.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section" id="blogs"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="600">
      <h2 className="section__title">Blogs</h2>
      <span className="section__subtitle">All of my blogs here</span>
      <div className="container blogs-container">
        {blogs?.slice(0, 3).map((blog) => <div key={blog._id} className="blog-content blog-card">
          <div className="blog-card-image">
            <div className="blog-image-container">
              <img loading="" src={blog?.image} />
            </div>
          </div>
          <div className="blog-card-content">
            <h3 className="blog-title">{blog?.blogTitle}</h3>
            <p className="blog-description">
              {blog?.shortDesc.length > 100 ? blog.shortDesc.substring(0, 100) + '...' : blog.shortDesc}
            </p>
            <div className="">
              <Link to={"blogs/1"} className="projects__btn bold">
                View Details <i className="uil uil-external-link-alt projects__btn-icon"></i>
              </Link>
            </div>
          </div>
        </div>)}
      </div>
      <div className=" more-btn">
        <Link to={"/blogs"} type="submit" className="button">
          View More
        </Link>
      </div>
    </section >
  );
};

export default HomeBlogs;