import { getHomeBannerList } from '@/lib/service/home'
import { IBanners } from '@/lib/type/home'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
const HomeBanner = () => {
    const [list, setList] = useState<IBanners[]>()
    const [loading,setLoading] = useState(true)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    const getList = async () => {
        setLoading(true)
        const { data } = await getHomeBannerList({ token: "92fb5f84cbcd1d9aa8a5dcc57e9faf9f" })
        setList(data)
        setLoading(false)
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <Box>
            <Slider {...settings}>
                {
                    !loading&&list?.map((item, index) => {
                        return (
                            <Box className='cursor-pointer shadow-inner' key={index}>
                                <img src={item.file} width={1400} height={280}  className="max-w-full max-h-[280px]" alt=""/>
                            </Box>
                        )
                    })
                }
            </Slider>
        </Box>
    )
}




export default function Home() {

    return (
            <header>
                <HomeBanner />
            </header>
    )
}
