import React, {useEffect} from 'react';

export default function About (props) {

    useEffect(() => {
        document.title = "About"
    })

    return (
        <div>About Component</div>
    )
}