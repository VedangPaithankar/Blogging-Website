import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function ViewBlog() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectToGoBack = () => {
    navigate('/');
  }

  const redirectToAddBlog = () => {
    navigate('/add-blog');
  }

  const { state } = location;

  if (!state || !state.blog) {
    // Handle the case when the blog data is not available
    return <div>Blog not found.</div>;
  }

  const { blog } = state;
  
  return (
    <div>
      {console.log(blog)}
      <div className="flex flex-col items-center justify-center m-5">
        {/* Display the selected blog */}
        <img className="bg-white view-image rounded-xl shadow-solid shadow-[#E94560] overflow-hidden" src={blog.Image} alt="" />
        <p className="bg-white viewblog rounded-xl shadow-solid shadow-[#E94560] p-3">{blog.Blogs}</p>
      </div>
      <div>
        <div className="flex justify-between">
          <button className="bg-white p-2 px-8 rounded-xl shadow-solid shadow-[#E94560] mt-5 text-2xl mb-8 order-first ml-10" onClick={redirectToGoBack}>
            Go Back
          </button>
          <button className="bg-white p-2 px-8 rounded-xl shadow-solid shadow-[#E94560] mt-5 text-2xl mb-8 order-last mr-10" onClick={redirectToAddBlog}>
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;