import React from 'react'

export default function DataFile(props:any) {
    return (
        <>
            <div className="data-file">
                <span className="k">{props.k} :</span>
                <span className="v">{props.v}</span>
            </div>
        </>
    )
}
