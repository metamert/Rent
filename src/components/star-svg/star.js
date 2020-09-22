import React from 'react'

export default function Stars({count}) {
  
  
  
    return (
        <div className="margin-right-1 center-xs">

{[1,2,3,4,5].map((item,index)=>{
    console.log(count)
    console.log(index)
if(index<count)
return(

    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFB703" width="19.132" height="18.195" viewBox="0 0 19.132 18.195">
    <path id="Path_67063" data-name="Path 67063" d="M24.086,12.824a.5.5,0,0,0-.468-.348l-6.473-.132-2.126-6.1a.5.5,0,0,0-.95,0l-2.126,6.1-6.473.132a.5.5,0,0,0-.293.9l5.158,3.9L8.462,23.456a.5.5,0,0,0,.768.559l5.314-3.688,5.314,3.688a.5.5,0,0,0,.768-.559l-1.875-6.177,5.158-3.9a.5.5,0,0,0,.175-.556Z" transform="translate(-4.978 -5.91)" fill="#ffb703"/>
  </svg>
  

)
else return(

    <svg xmlns="http://www.w3.org/2000/svg" width="19.132" height="18.195" viewBox="0 0 19.132 18.195">
    <g id="_x35_-Star" opacity="0.5">
      <path id="Path_67063" data-name="Path 67063" d="M24.086,12.824a.5.5,0,0,0-.468-.348l-6.473-.132-2.126-6.1a.5.5,0,0,0-.95,0l-2.126,6.1-6.473.132a.5.5,0,0,0-.293.9l5.158,3.9L8.462,23.456a.5.5,0,0,0,.768.559l5.314-3.688,5.314,3.688a.5.5,0,0,0,.768-.559l-1.875-6.177,5.158-3.9a.5.5,0,0,0,.175-.556Z" transform="translate(-4.978 -5.91)" fill="#fff"/>
    </g>
  </svg>
  

)

})

}       
        </div>
    )
}
