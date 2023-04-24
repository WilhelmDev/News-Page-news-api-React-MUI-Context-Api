/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, 
    CardMedia, Grid, Link, Typography } from "@mui/material"


const NewsItem = ({item}) => {
    const {url, title, urlToImage, description, source } = item
    return (
        <Grid item md={6} lg={4} xs={12}>
            <Card>
                {urlToImage && (
                    <CardMedia component={'img'} 
                    alt={`image of ${title}`} image={urlToImage}
                    height={'250'} />
                )}

                <CardContent>
                    <Typography variant="body1" color={'error'}>
                        {source.name}
                    </Typography>
                    <Typography variant="h5" component={'div'}>
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <CardActions>
                        <Link href={url} target="_blank"
                        variant="button" width={'100%'} textAlign={'center'}
                        sx={{textDecoration:'none'}}>
                            Leer Noticia
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default NewsItem