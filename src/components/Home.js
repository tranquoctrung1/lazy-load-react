import React, {useEffect} from 'react';

export default function Home (props) {

    useEffect(() => {
        document.title = "Home"
    })
    
    return (
        <div>Home Component</div>
    )
}