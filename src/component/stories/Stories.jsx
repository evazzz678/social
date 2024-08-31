import React from 'react'
import "./Stories.css"
import pic1 from "./../../assets/pic1.jpg"
import { Link } from 'react-router-dom'

function Stories() {

    return (
        <div>
            Stories
            <div className='main-stories'>
                <Link to="/OurStory"><img src="pic1" alt="" className='our-story' /></Link>
            </div>

        </div>
    )
}

export default Stories