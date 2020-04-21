import React from 'react';


export default function (props) {

    return (
        <div>
            <li> 
                <img src={`https://via.placeholder.com/${props.number * 10} `} alt="placeholder"/>
            </li>
        </div>
    )

}