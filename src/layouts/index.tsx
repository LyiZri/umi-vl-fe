import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet } from 'umi'
import Footer from './footer'
import Header from './header'
import './index.less'
interface IProps {
    children?: React.ReactNode
}

export default function Layout({ children }: IProps) {
    return (
        <Box className='min-h-screen flex flex-col justify-between bg-pagebg'>
            <Header />
            <Box className=' w-8/12 mx-auto'>
                <Outlet/>
            </Box>
            <Footer />
        </Box>
    )
}
