import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  const fetchDataFromFirebase = async () => {
    try {
      const response = await fetch(
        "https://blogging-website-81d1e-default-rtdb.firebaseio.com/Blogs.json"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Store the fetched data in state
        if (data) {
          const blogArray = Object.values(data);
          setBlogData(blogArray);
          console.log(blogArray)
        }
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function stripFirstThreeLines(inputText) {
    // Split the input text into lines
    const lines = inputText.split('\n');
  
    // Check if there are at least three lines
    if (lines.length >= 3) {
      // Use slice to get the lines starting from the 4th line (index 3)
      return lines.slice(3).join('\n');
    } else {
      // If there are less than three lines, return an empty string
      return inputText;
    }
  }

  const redirectToAddBlog = () => {
    navigate('/add-blog');
  }

  const redirectToGoBack = () => {
    navigate('/');
  }

  const redirectToBlog = (blog) => {
    navigate('/view-blog', { state: { blog } });
  }

  return (
    <div>
      {/* Map over the fetched blog data and display it */}
      {blogData.map((blog, index) => (
        <div className="flex flex-col items-center justify-center m-5"
        key={index}
        onClick={() => redirectToBlog(blog)}>
          <div className="bg-white view-image rounded-xl shadow-solid shadow-[#E94560] overflow-hidden">
            <img src={blog.Image} alt="" />
          </div>
          <div className="bg-white viewblog rounded-xl shadow-solid shadow-[#E94560]">
            <p className="p-5 text-justify">{stripFirstThreeLines(blog.Blogs)}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <button
          className="bg-white p-2 px-8 rounded-xl shadow-solid shadow-[#E94560] mt-5 text-2xl mb-8 order-first ml-10"
          onClick={redirectToGoBack}
        >
          Go Back
        </button>
        <button
          className="bg-white p-2 px-8 rounded-xl shadow-solid shadow-[#E94560] mt-5 text-2xl mb-8 order-last mr-10"
          onClick={redirectToAddBlog}
        >
          Add Blog
        </button>
      </div>
    </div>
  );
}

export default Blogs;