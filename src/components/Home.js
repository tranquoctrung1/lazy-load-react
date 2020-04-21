import React, {useEffect, lazy} from 'react';

const Image = lazy(() => import('./Image'));

export default function Home (props) {

    const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


    useEffect(() => {
        document.title = "Home"
    })
    
    return (
        <div>
            <div>Home Component</div>
            {!number && <div> nothing here</div>}
            {number && number.map((item, index) => <Image key={index.toString()} number={item}></Image>)}
        </div>
    )
}