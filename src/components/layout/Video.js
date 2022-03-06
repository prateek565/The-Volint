import React, { Component, useState } from 'react';
import FsLightbox from 'fslightbox-react';


const Video = ({className}) => {

    const [toggler, setToggler] = useState(false);

    return (
        
        <div className="Video-content">

            <a onClick={ () => setToggler(!toggler) } className=" d-flex">
                <i className={className}></i>
            </a>
            <FsLightbox
                toggler={ toggler }
                sources={ [ 'https://www.youtube.com/watch?v=YLN1Argi7ik' ] } 
                
            />
        </div>
    );
};

export default Video;