import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddBlog(props) {
    const [imageSrc, setImageSrc] = useState(null);
    const [blogContents, setBlogContents] = useState("");
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!imageSrc || !blogContents) {
            alert("Please fill in all contents.");
        } 
        else {
            console.log("Blog Contents:", blogContents);
            console.log("Image Contents:", imageSrc);
            postData(); // Call the postData function
            navigate('/'); // Redirect to the home page
        }
    };

    const postData = async () => {
        try {
            const response = await fetch("https://blogging-website-81d1e-default-rtdb.firebaseio.com/Blogs.json", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    Blogs: blogContents,
                    Image: imageSrc,
                }),
            });

            if (response.ok) {
                console.log("Data posted successfully.");
            } else {
                console.error("Failed to post data.");
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    return (
        <div>
            <form className="form flex flex-col items-center">
                <label htmlFor="file" className="bg-white w-full rounded-xl overflow-hidden m-5 shadow-solid shadow-[#E94560]">
                    <div className="relative">
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt="Uploaded Image"
                                className="w-full h-full rounded-xl"
                            />
                        ) : (
                            <div className="text p-20">
                                <span className="text-[#E94560] m-2">Upload Image</span>
                            </div>
                        )}
                    </div>
                    <input
                        className="hidden"
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </label>
                <textarea
                    placeholder="Blog Contents"
                    className="bg-white w-full h-80 text-xl rounded-xl overflow-hidden mb-5 shadow-solid shadow-[#E94560] p-5"
                    rows="5"
                    value={blogContents}
                    onChange={(e) => setBlogContents(e.target.value)}
                />
            </form>
            <div>
                <button className="bg-white cr rounded-xl shadow-solid shadow-[#E94560] m-5" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddBlog;
