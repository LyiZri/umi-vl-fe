import { Box } from '@mui/material'
import React from 'react'
import KlIcon from '../kl-icons'

interface IProps {
    title?: string
}


export default function KlTitle({ title }: IProps) {
    return (
        <Box className='text-xl my-4'>
            <KlIcon type='icon-arrowhead' className='text-yellow-6 align-middle text-xl pb-2 inline-block'/>
            <p className='text-2xl font-bold inline-block leading-10'>
                {title}
            </p>
        </Box>

    )
}
