import React from 'react'
import ComingSoon from '../assets/ComingSoon.svg'
import GoToTop from './GoToTop'

function BlogsPage() {
    return (
        <div className="blogs__page flex__center">
            <h1>Coming Soon...</h1>
            <img src={ComingSoon} alt=''></img>
            <GoToTop />
        </div>
    )
}

export default BlogsPage
