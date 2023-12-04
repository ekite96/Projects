import "../static/css/star-rating.css"
import { memo } from "react";

const Star = ({ filled, onClick, size }) => {
    const starSymbol = filled ? '\u2605' : '\u2606';
    return <span className={`star h${7 - size}`} onClick={onClick}>{starSymbol}</span>;
};

/**
 * 
 * @param {number} value 1-5 depending on number of stars
 * @param {*} onChange callback for when the value changes which takes a value as a param
 * @param {1 | 2 | 3 | 4 | 5 | 6} size the size of this element, the bigger the number the larger
 * @param {boolean} readonly if true, there will be no hover effect, and the star rating cannot be changed, if false, the user can interact with the rating
 * @returns 
 */
const StarRating = memo(({ value, onChange, size, readonly }) => {
    if (size < 1 || size > 6) {
        throw new Error("StarRating size must fall in the range of 1-6 (inclusive).");
    }

    const handleClick = (starIndex) => {
        if (onChange && !readonly) {
            onChange(starIndex + 1);
        }
    };

    return (
        <div>
            <div className={`star-area ${readonly ? '' : 'hoverable-star-area'}`}>
                {
                    Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} filled={i + 1 <= value} onClick={() => handleClick(i)} size={size} />
                        // <div>hi</div>
                    ))
                }
            </div>
        </div>
    );
})

export default StarRating;