import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
    // console.log(props.company)
    // console.log(props.dsg)
  return (
 <div className="card"> 
      <div>
          <div className="top">
          <img src={props.brand} alt=""/>
          <button>Save <Bookmark size={13}/></button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.date}</span>
          </h3>
          <h2>{props.dsg}</h2>
        <div className="tag">
        <h4>{props.tagA}</h4>
          <h4>{props.tagB}</h4>
        </div>
        <div className="info">
          <p>{props.info}</p>
        </div>
        </div>
      </div>
        <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
              <p>{props.loc}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card