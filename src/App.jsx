import {Container, Grid, Typography} from '@mui/material';
import FormSelector from './components/FormSelector';
import { NewsProvider } from './context/NewsProvider';
import NewsList from './components/NewsList';

function App() {

  return (
    <>
    <NewsProvider>
      <Container>
          <header>
            <Typography align='center' marginY={5} component={'h1'} variant='h3'>
              Buscador de Noticias
            </Typography>
            <Typography align='center'  component={'h5'} variant='h5' sx={{opacity:.3}}>
              coded by: @WilhelmDev
            </Typography>
          </header>

          <Grid container direction='row' justifyContent={'center'} alignItems={'center'} >
            <Grid item md={6} xs={9} lg={5}>
              <FormSelector />
            </Grid>
          </Grid>

          <NewsList />
        </Container>
    </NewsProvider>
      
    </>
  )
}

export default App
