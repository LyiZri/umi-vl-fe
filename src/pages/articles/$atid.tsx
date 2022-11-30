import { useEffect, useState } from 'react'
import { IArticles } from '@/lib/type/articles'
import { getArticleDetails, getArticlesList } from '@/lib/service/articles'
import { Box, Skeleton } from '@mui/material'
import KlShareBar from '@/components/kl-sharebar'
import KlIcon from '@/components/kl-icons/index'
import { timestampToTime, HTMLDecode, getShortenStr } from '@/lib/utils'
import KlCard from '@/components/kl-card'
import { history, useParams } from '@umijs/max'




const ArticleSkeletonBox = () => {
    return (
        <Box>
            <Skeleton variant='text' sx={{ fontSize: "2rem", bgcolor: 'grey.900' }} />
            <Skeleton variant='text' sx={{ fontSize: "2rem", bgcolor: 'grey.900' }} />
            <Skeleton variant='text' sx={{ fontSize: "2rem", bgcolor: 'grey.900' }} />
            <br />
            <Skeleton variant="rounded" height={360} sx={{ bgcolor: 'grey.900' }} />
        </Box>
    )
}

interface IATDeatils {
    pageValue: IArticles
}

const ArticlePageDetails = ({ pageValue }: IATDeatils) => {
    return (
        <Box>
            <Box className='text-2xl font-bold break-words'>
                {pageValue.article_title}
            </Box>
            <Box className='flex justify-between w-full mt-4'>
                <Box className='flex justify-start'>
                    <Box className='text-sm text-second mr-8'>
                        by   {pageValue.author}
                    </Box>
                    <Box className='text-second'>
                        <KlIcon type='icon-date' className='text-sm  text-second align-middle'></KlIcon>
                        <div className='inline-block text-second text-sm ml-2'>{timestampToTime(pageValue.optime)}</div>
                    </Box>
                </Box>
                <KlShareBar />
            </Box>
            <section className='p-4 mt-4 rounded-lg bg-cardbg-hover break-words leading-8 richhtml-box'>
                {/* 富文本翻译 */}
                {/* <div className='w-full break-words' dangerouslySetInnerHTML={{ __html: HTMLDecode(pageValue.content) }} ></div> */}
                <div className='w-full break-words' dangerouslySetInnerHTML={{ __html: pageValue.content ?? "" }} ></div>
            </section>
        </Box>
    )
}

const ArticleGame = ({ pageValue }: IATDeatils|any) => {
    const [list, setList] = useState<IArticles[]>()
    const [loading, setLoading] = useState(true)
    const getList = async () => {
        console.log(pageValue);
        setLoading(true)
        const { data } = await getArticlesList({ article_status: 1 })
        setList(data)
        // const { data: gameData } = await getGameDetails({ game_name: (pageValue?.games[0] as any).game_name })
        setLoading(false)
    }

    const goArticlesPage = (atid="") => {
        history.push({ pathname: `/articles/${atid}`}, {query: { atid } })
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <Box className='ml-4'>
            <KlCard className="mb-4" >
                <Box className="flex justify-between cursor-pointer">
                    {/* <Image
                            src={item.article_img}
                            className="min-h-[78px] h-[78px] w-[140px] min-w-[140px] rounded-xl"
                            width={140}
                            height={100}
                            placeholder="blur"
                            blurDataURL={getBlurDataURL(278, 138)}
                            alt="" />
                        <Box className="ml-4 flex flex-col justify-between h-[78px]">
                            <Box className=''>
                                {getShortenStr(item.article_title, 60)}
                            </Box>
                            <Box className='flex justify-between'>
                                <Box className='flex justify-start mt-1'>
                                    <span className='inline-block text-xs text-sec-stress leading-5 ml-2'>by {getShortenStr(item.author, 24)}</span>
                                </Box>
                                <Box className='mb-2'>
                                    <KlIcon type='icon-date' className='text-xs  text-sec-stress align-middle'></KlIcon>
                                    <div className='inline-block text-sec-stress text-xs ml-1'>{timestampToTime(item.optime)}</div>
                                </Box>
                            </Box>
                        </Box> */}
                </Box>
            </KlCard>
            {!loading && list?.map((item, index) => {
                return <KlCard className="my-4" key={index} onClick={() => {goArticlesPage(item.atid) }}>
                    <Box className="flex justify-between cursor-pointer w-[400px]">
                        <img
                            src={item.article_img}
                            className="min-h-[78px] h-[78px] w-[140px] min-w-[140px] rounded-xl"
                            width={140}
                            height={100}
                            placeholder="blur"
                            alt="" />
                        <Box className="ml-4 flex flex-col justify-between">
                            <Box className='text-xs line-clamp-2'>
                                {item.article_title}
                            </Box>
                            <Box className='flex justify-between'>
                                <Box className='flex justify-start mt-1'>
                                    <span className='inline-block text-xs text-sec-stress leading-5 '>by {getShortenStr(item.author, 12)}</span>
                                </Box>
                                <Box className='mb-2'>
                                    <KlIcon type='icon-date' className='text-xs  text-sec-stress align-middle'></KlIcon>
                                    <div className='inline-block text-sec-stress text-xs ml-1'>{timestampToTime(item.optime)}</div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </KlCard>
            })}
        </Box>
    )
}

export default function ArticleGlid() {
    const [loading, setLoading] = useState(true)
    const [pageValue, setPageValue] = useState<IArticles>()
    const {atid} = useParams()
    const getPageValue = async () => {
        setLoading(true)
        const { data } = await getArticleDetails({ atid })
        setPageValue(data)
        setLoading(false)
    }
    useEffect(() => {
        getPageValue()
    }, [atid])
    return (
            <Box className='my-8 flex justify-between'>
                <Box className='bg-cardbg rounded-2xl p-4 w-full'>
                    {
                        loading &&
                        <ArticleSkeletonBox />
                    }
                    {
                        !loading && pageValue &&
                        <Box>
                            <ArticlePageDetails pageValue={pageValue} />
                        </Box>
                    }
                </Box>
                <Box>
                    <ArticleGame pageValue={pageValue} />
                </Box>
            </Box>
    )
}
