import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ContentBox(props) {
    const navigate = useNavigate(); // Move this line inside the function component.

    const redirectToViewBlog = () => {
        navigate('/view-blog');
    }

    return (
        <div className="flex flex-col items-center justify-center m-5" id="PostCard1">
            <div className="bg-white cc rounded-xl shadow-solid shadow-[#E94560]">
                <p className="p-5 text-justify">
                    {props.text}
                </p>
            </div>
            <button className="bg-white cr rounded-xl shadow-solid shadow-[#E94560] mt-5" onClick={redirectToViewBlog}>
                Read More
            </button>
        </div>
    );
}

ContentBox.propTypes = {
    text: PropTypes.string.isRequired,
};

ContentBox.defaultProps = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, soluta. Sequi enim autem at tempore adipisci! Qui impedit repudiandae magni harum ratione! Atque non dolorem voluptas laboriosam officiis autem eveniet ducimus ratione nesciunt perferendis, expedita accusantium consequatur! Omnis nesciunt adipisci a nulla dignissimos! Natus laborum illo a debitis officia adipisci maiores, eum ipsam sunt labore expedita esse eveniet modi velit quis veritatis odit omnis voluptates laboriosam tempora corporis, blanditiis aut ex quidem. Reiciendis amet quis obcaecati nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, soluta. Sequi enim autem at tempore adipisci! Qui impedit repudiandae magni harum ratione! Atque non dolorem voluptas laboriosam officiis autem eveniet ducimus ratione nesciunt perferendis, expedita accusantium consequatur! Omnis nesciunt adipisci a nulla dignissimos! Natus laborum illo a debitis officia adipisci maiores, eum ipsam sunt labore expedita esse eveniet modi velit quis veritatis odit omnis voluptates laboriosam tempora corporis, blanditiis aut ex quidem. Reiciendis amet quis obcaecati nisi."
};

export default ContentBox;