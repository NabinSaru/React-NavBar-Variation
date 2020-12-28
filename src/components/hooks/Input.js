import React from 'react'

export const Input = ({value,contentChange,onEnter}) => {
    return (
        <textarea 
            style={{padding:12}}
            value={value} 
            onChange={
                (e)=>{
                    contentChange(e.target.value)
                    }}
            onKeyUp={
                e=> e.keyCode===13?onEnter(e.target.value):null
                    }
        />
    )
}
