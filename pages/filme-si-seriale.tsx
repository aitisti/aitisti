import MediaCardContainer from '../components/common/MediaCardContainer';
import { InferGetStaticPropsType } from 'next';
import { MediaModel } from '../types/MediaModel';

export const getStaticProps = async () => {
  const movies: MediaModel[] = [
    {
      description: 'The Social Network',
      targetUrl: 'https://www.imdb.com/title/tt1285016',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BYTBkNDMwNzgtZjJkNi00ZTVhLWE5MzAtMTYzN2U4OTNjOWRjXkEyXkFqcGdeQXVyOTAzODkzMjI@._V1_QL75_UY562_CR8,0,380,562_.jpg',
    },
    {
      description: 'Office Space',
      targetUrl: 'https://www.imdb.com/title/tt0151804',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    },
    {
      description: 'The Social Dilemma',
      targetUrl: 'https://www.imdb.com/title/tt11464826',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UY562_CR8,0,380,562_.jpg',
    },
    {
      description: 'Citizenfour',
      targetUrl: 'https://www.imdb.com/title/tt4044364',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMTc0MTM0MTA5MF5BMl5BanBnXkFtZTgwNzEwODEwMzE@._V1_QL75_UY562_CR2,0,380,562_.jpg',
    },
    {
      description: "The Internet's Own Boy: The Story of Aaron Swartz",
      targetUrl: 'https://www.imdb.com/title/tt3268458',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMjgwOTgwNjQ5MV5BMl5BanBnXkFtZTgwMzk1NTQ2MTE@._V1_QL75_UY562_CR1,0,380,562_.jpg',
    },
  ];
  const tvSeries: MediaModel[] = [
    {
      description: 'Mr. Robot',
      targetUrl: 'https://www.imdb.com/title/tt4158110',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BMTE0Mjc1MTk2MjFeQTJeQWpwZ15BbWU4MDk2NzI4MDYx._V1_QL75_UX380_CR0,0,380,562_.jpg',
    },
    {
      description: 'Sillicon Valley',
      targetUrl: 'https://www.imdb.com/title/tt2575988',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BM2Q5YjNjZWMtYThmYy00N2ZjLWE2NDctNmZjMmZjYWE2NjEwXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_FMjpg_UX1000_.jpg',
    },
  ];

  return {
    props: { movies, tvSeries },
  };
};

const MediaPage = ({
  movies,
  tvSeries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <MediaCardContainer title={'Filme'} recommendations={movies} />
      <MediaCardContainer title={'Seriale'} recommendations={tvSeries} />
    </>
  );
};

export default MediaPage;
