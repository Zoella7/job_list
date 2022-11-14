import React, {useState} from 'react';
import css from "./JobList.module.css"
import {Rating} from 'react-simple-star-rating'


const DetailComponent = ({job}) => {

    const {name, email, phone, title, address} = job

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }
    return (
        <div className={css.mainWrap}>
            <div>
                <img className={css.picture} src={job.pictures[1]} alt=""/>
            </div>
            <div className={css.infoBox}>
                <h3>{name} - {title}</h3>
                <p> Email:{email}</p>
                <p>Phone:{phone}</p>
                <p>Address:{address}</p>
            </div>

            <div className={css.stars}>
                <Rating onClick={handleRating} ratingValue={rating}/>
                <div className={css.text}>Posted 3 days ago</div>
            </div>


        </div>
    );
};

export {DetailComponent};