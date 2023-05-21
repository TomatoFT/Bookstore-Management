import React from 'react';
import './Books.css'; // Import the CSS file
import category1Image from '../../images/mountain.png';
import category2Image from '../../images/not-giving-a-fuck.png';
import category3Image from '../../images/vibes.png';
import category4Image from '../../images/shopping.png';

const Books = () => {
    return (
        <div>
            <h1>The Available books</h1>
            <div className="category-section">
                <div className="category-item">
                    <img src={category1Image} alt="Category 1" />
                    <span>Category 1</span>
                </div>

                <div className="category-item">
                    <img src={category2Image} alt="Category 1" />
                    <span>Category 1</span>
                </div>
                <div className="category-item">
                    <img src={category3Image} alt="Category 1" />
                    <span>Category 1</span>
                </div>
                <div className="category-item">
                    <img src={category4Image} alt="Category 1" />
                    <span>Category 1</span>
                </div>
                <div className="category-item">
                    <img src={category4Image} alt="Category 1" />
                    <span>Category 1</span>
                </div>
            </div>
        </div>
    );
};

export default Books;
