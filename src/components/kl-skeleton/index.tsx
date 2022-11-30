import { Grid, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react'


interface IProps {
    gridSpace?: number
    width?: number
    height?: number
    skeletonLength?: number
    md?: number
}

export default function KlSkeleton({ gridSpace = 2, width = 301, height = 308, skeletonLength = 8, md = 3 }: IProps) {
    const [arr,setArr] = useState<number[]>([])
    useEffect(()=>{
        let _arr = []
        for (let index = 0; index < skeletonLength; index++) {
            _arr.push(0)
        }
        setArr(_arr)
    },[skeletonLength])
    console.log(arr);
    return (
        <Grid container spacing={gridSpace}>
            {
                arr.map((item, index) => {
                    console.log(item);
                    
                    return <Grid item key={index} md={md}>
                        <Skeleton variant='rounded' sx={{ bgcolor: 'grey.900' }} width={width} height={height}></Skeleton>
                    </Grid>
                })
            }
        </Grid>
    )
}
