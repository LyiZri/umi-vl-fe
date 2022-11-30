import { useEffect, useState } from 'react'
import KlTitle from '@/components/kl-title'
import { Box, Grid } from '@mui/material'
import { getArticlesList } from "@/lib/service/articles"
import { IArticles } from '@/lib/type/articles'
import KlCard from '@/components/kl-card'
import KlIcon from '@/components/kl-icons'
import { getShortenStr, timestampToTime } from '@/lib/utils'
import KlSkeleton from '@/components/kl-skeleton'
import { history } from '@umijs/max'

export default function KlArticles() {
    const [list, setList] = useState<IArticles[]>([])
    const [loading, setLoading] = useState(false)
    const getList = async () => {
        setLoading(true)
        let { data } = await getArticlesList({ featured: 1 })
        //精选文章长度不够 补充
        if (data.length < 8) {
            const { data: _data } = await getArticlesList({ featured: 0, article_status: 1 })
            console.log(_data);

            data = [...data, ..._data.slice(0, 8 - data.length)]
        }
        setList(data)
        setLoading(false)
    }
    const goArticlesPage = (atid="") => {
        history.push({pathname:`/articles/${atid}`},{query:{atid}})
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <Box>
            <KlTitle title="Klick's Articles" />
            {
                loading && <KlSkeleton gridSpace={3} width={301} height={308} skeletonLength={8} md={3} />
            }
            <Grid container spacing={3}>
                {
                    !loading && list.map((item, index) => {
                        return <Grid item xs={12} md={3} key={index}>
                            <KlCard key={index} className="cursor-pointer" onClick={()=>goArticlesPage(item?.atid)}>
                                <img
                                    src={item.article_img}
                                    className="max-h-[158px] h-[158px] rounded-xl"
                                    placeholder="blur"
                                    alt="" />
                                <Box className=' mt-4'>
                                    {getShortenStr(item?.article_title, 38)}
                                </Box>
                                <Box className='flex justify-between'>
                                    <Box className='flex justify-start mt-1'>
                                        <span className='inline-block text-xs text-sec-stress leading-5 '>by {getShortenStr(item?.author, 12)}</span>
                                    </Box>
                                    <Box className=''>
                                        <KlIcon type='icon-date' className='text-xs  text-sec-stress align-middle'></KlIcon>
                                        <div className='inline-block text-sec-stress text-xs ml-1'>{timestampToTime(item?.optime)}</div>
                                    </Box>
                                </Box>
                            </KlCard>
                            {/* </Link> */}
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )
}
