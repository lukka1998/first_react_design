import React from 'react'
import Button from './button'

function buttons() {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:'center' ,gap:"10px"}}>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>

        </div>
    )
}

export default buttons