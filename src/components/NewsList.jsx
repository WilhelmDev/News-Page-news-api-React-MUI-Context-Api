import { Grid, Pagination, Stack, Typography } from "@mui/material"
import useNews from "../hooks/useNews"
import NewsItem from "./NewsItem"


export default function NewsList() {
    const {news, totalNews, handleChangePag, page} = useNews()
    const totalPages = Math.ceil(totalNews/20)
    return (
        <>
            <Typography textAlign={'center'} marginY={4} variant="h3" 
            component={'h2'}>
                Ultimas noticias
            </Typography>

            <Grid container spacing={2}>
                {news.map( (item) => (
                    <NewsItem  key={item.url} item={item}/>
                ))}
            </Grid>

            <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}
            marginY={5}>
                <Pagination count={totalPages} color="primary" onChange={handleChangePag}
                page={page}/>
            </Stack>
        </>
    )
}
