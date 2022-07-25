import React from "react";

export default function Person(props) {
    return (
        <div className="person-info">
            <img src={props.img} alt="person"/>
            <div className="move-top">
                <h2 className="name">{
                    `${props.firstName} ${props.lastName}`}
                </h2>
                <h3 className="age">{props.age}</h3>
            </div>
        </div>
    )
}