import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { KlTab, KlTabs } from '@/components/kl-tabs';
import KlInput from '@/components/kl-search-input';
import KlIcon from '@/components/kl-icons/index';
import { history, useLocation } from '@umijs/max';
import { config } from '@/lib/config';

enum ERoute{
    HOME = "/home",
    ALL_GAMES = "/all-games",
    ARTICLES="/articles"
}


export default function Header() {
    const [tabNum, setTabNum] = useState(0)
    const {pathname} = useLocation()
    useEffect(()=>{
        if(pathname === ERoute.HOME){
            setTabNum(0)
        }else if(pathname === ERoute.ALL_GAMES){
            setTabNum(1)
        }else if(pathname === ERoute.ARTICLES){
            setTabNum(2)
        }
    },[pathname])
    const onTabChange = (event: React.SyntheticEvent, _tabNum: number) => {
        if(_tabNum === 0){
            history.push(ERoute.HOME)
        }else if(_tabNum === 1){
            history.push(ERoute.ALL_GAMES)
        }else if(_tabNum === 2){
            history.push(ERoute.ARTICLES)
        }
    }
    return (
        <Box className='bg-cardbg'>
            <Box className='mx-auto w-content flex justify-between'>
            <Box className='mt-3'>
                    <img
                        width={139}
                        height={40}
                        alt=""
                        src={config.logo}
                    />
                </Box>
                <KlTabs value={tabNum} onChange={onTabChange} aria-label="basic tabs example">
                    <KlTab label="Home" value={0} />
                    <KlTab label="All games" value={1} />
                    <KlTab label="Articles" value={2} />
                </KlTabs>
                <Box className='my-2'>
                    <Box className='bg-cardbg-hover rounded-3xl  px-4 flex justify-between'>
                        <KlInput placeholder='Search...' className='h-8' />
                        <KlIcon className='cursor-pointer block leading-8' type='icon-Navicon_search'></KlIcon>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
