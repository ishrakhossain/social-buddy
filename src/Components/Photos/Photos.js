import React from 'react';
import './Photo.css';

const Photos = (props) => {
    const { large } = props.photo.picture;
    return (
        <div className = 'photos'>
            
                 <img  src = {large} alt=""/>
            
        </div>
    );
};

export default Photos;