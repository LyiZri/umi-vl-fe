import { Card } from '@mui/material'
import React from 'react'

export default function KlCard(props:any) {
    return (
        <Card {...props} className={`rounded-xl p-4 bg-cardbg hover:bg-cardbg-hover text-white hover:shadow-inner  hover:text-yellow-6 overflow-hidden ${props.className}`} >
            {props?.children}
        </Card>
    )
}
