import { InferGetStaticPropsType } from 'next';
import { MediaModel } from '../types/MediaModel';
import MediaCardContainer from '../components/common/MediaCardContainer';

export const getStaticProps = async () => {
  const general: MediaModel[] = [
    {
      description: 'The Pragmatic Programmer',
      targetUrl:
        'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      imgUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg',
    },
    {
      description: 'Clean Code',
      imgUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293._SX318_.jpg',
      targetUrl: 'https://www.goodreads.com/book/show/3735293-clean-code',
    },
    {
      description: 'Building Microservices',
      imgUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403186979l/22512931.jpg',
      targetUrl:
        'https://www.goodreads.com/book/show/22512931-building-microservices',
    },
    {
      description: 'Design Patterns',
      targetUrl: 'https://www.goodreads.com/book/show/85009.Design_Patterns',
      imgUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348027904l/85009.jpg',
    },
  ];
  const java: MediaModel[] = [
    {
      description: 'Effective Java',
      targetUrl: 'https://www.goodreads.com/book/show/105099.Effective_Java_',
      imgUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433511045l/105099.jpg',
    },
    {
      description: 'Thinking in Java',
      targetUrl: 'https://www.goodreads.com/book/show/71672.Thinking_in_Java',
      imgUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347737121l/71672.jpg',
    },
  ];

  return {
    props: { general, java },
  };
};

const BooksPage = ({
  general,
  java,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <MediaCardContainer
        title={'Recomandări generale'}
        recommendations={general}
      />
      <MediaCardContainer title={'Java'} recommendations={java} />
    </>
  );
};

export default BooksPage;
