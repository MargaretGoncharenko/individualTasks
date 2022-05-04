import React from 'react'
import p from "./../pages/pages.module.css"

function Error404() {
    return (
        <div className={p.page}>
            <div>404</div>
            <div>Page not found!</div>
            <img src={"https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png"}
                 height={"200px"}
                 width={"300px"}/>
        </div>
    )
}

export default Error404
