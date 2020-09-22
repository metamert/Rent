import React from 'react'

export default function titleComponent({title,p}) {
    return (
        [
              <h2 className="font-4">{title}</h2>,
        
        <div className="infocard-top-border margin-top-1"></div>,
        <div  className="grey">
        {p}
        </div>
        ]
    )
}
