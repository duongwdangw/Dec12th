import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';



function StarRating() {


    
    const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);

    useEffect(() =>{
        if(rating == 5){
            alert("Xin cam on");
        }else if(rating == 1 || rating == 2){
            prompt("Xin nhap ly do : ?")
        }

    },[rating])

    return (
        <div>
            {[...Array(5)].map((star,index)=> {
                const currentRating = index +1;
                return (
                    <label>
                        {/* <input 
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() =>setRating(currentRating)}
                        /> */}
                        <FaStar 
                        className="star" 
                        size={50}
                        color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                        value={currentRating}
                        onClick={() =>setRating(currentRating)}


                       
                        />
                    </label>
                )
            })}
            <p>
            Your rating is {rating} 
                <br/>  
              Thanks for the review ❤️
            </p>
        </div>
    )
}



export default StarRating;