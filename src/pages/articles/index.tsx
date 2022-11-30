import AllNews from '@/components/articles/all-news'
import KlArticles from '@/components/articles/kl-articles'
import { Box } from '@mui/material'
import React from 'react'

export default function Articles() {
    return (
        <Box>
            <KlArticles/>
            <AllNews/>
        </Box>
    )
}
