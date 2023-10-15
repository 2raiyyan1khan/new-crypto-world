import Container from "../Common/ContainerWrapper";
import Loading from "../Common/Loader";
import NewsGrid from "../Common/NewsGrid";
import SectionWrapper from "../Common/SectionWrapper";
export const dummyNewsData = [
  {
    url: "https://example.com/news/1",
    image: {
      thumbnail: { contentUrl: "image1.jpg" },
    },
    name: "News Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider1.jpg" },
        },
        name: "Provider 1",
      },
    ],
    datePublished: "2023-10-14T10:00:00Z",
  },
  {
    url: "https://example.com/news/2",
    image: {
      thumbnail: { contentUrl: "image2.jpg" },
    },
    name: "News Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider2.jpg" },
        },
        name: "Provider 2",
      },
    ],
    datePublished: "2023-10-14T09:30:00Z",
  },
  // Add 8 more data items below
  {
    url: "https://example.com/news/3",
    image: {
      thumbnail: { contentUrl: "image3.jpg" },
    },
    name: "News Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider3.jpg" },
        },
        name: "Provider 3",
      },
    ],
    datePublished: "2023-10-14T09:00:00Z",
  },
  {
    url: "https://example.com/news/4",
    image: {
      thumbnail: { contentUrl: "image4.jpg" },
    },
    name: "News Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider4.jpg" },
        },
        name: "Provider 4",
      },
    ],
    datePublished: "2023-10-14T08:30:00Z",
  },
  {
    url: "https://example.com/news/5",
    image: {
      thumbnail: { contentUrl: "image5.jpg" },
    },
    name: "News Title 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider5.jpg" },
        },
        name: "Provider 5",
      },
    ],
    datePublished: "2023-10-14T08:00:00Z",
  },
  {
    url: "https://example.com/news/6",
    image: {
      thumbnail: { contentUrl: "image6.jpg" },
    },
    name: "News Title 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider6.jpg" },
        },
        name: "Provider 6",
      },
    ],
    datePublished: "2023-10-14T07:30:00Z",
  },
  {
    url: "https://example.com/news/7",
    image: {
      thumbnail: { contentUrl: "image7.jpg" },
    },
    name: "News Title 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider7.jpg" },
        },
        name: "Provider 7",
      },
    ],
    datePublished: "2023-10-14T07:00:00Z",
  },
  {
    url: "https://example.com/news/8",
    image: {
      thumbnail: { contentUrl: "image8.jpg" },
    },
    name: "News Title 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider8.jpg" },
        },
        name: "Provider 8",
      },
    ],
    datePublished: "2023-10-14T06:30:00Z",
  },
  {
    url: "https://example.com/news/9",
    image: {
      thumbnail: { contentUrl: "image9.jpg" },
    },
    name: "News Title 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider9.jpg" },
        },
        name: "Provider 9",
      },
    ],
    datePublished: "2023-10-14T06:00:00Z",
  },
  {
    url: "https://example.com/news/10",
    image: {
      thumbnail: { contentUrl: "image10.jpg" },
    },
    name: "News Title 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    provider: [
      {
        image: {
          thumbnail: { contentUrl: "provider10.jpg" },
        },
        name: "Provider 10",
      },
    ],
    datePublished: "2023-10-14T05:30:00Z",
  },
];

// Slice the array to limit it to 10 items
const topTenNews = dummyNewsData;

const News = () => {
  // const { data, isFetching, isError, error } = useGetCryptoNewsQuery({
  //   newsCategory: "cryptocurrency",
  //   dataLimit: home ? 9 : 24,
  // });
  const isError = false;
  const error = "";
  const isFetching = false;
  const data = { value: topTenNews };
  return (
    <Container>
      <SectionWrapper>
        {isError ? (
          <h2>{error?.message}</h2>
        ) : isFetching ? (
          <Loading />
        ) : (
          <NewsGrid data={{ value: topTenNews }} />
        )}
      </SectionWrapper>
    </Container>
  );
};

export default News;
