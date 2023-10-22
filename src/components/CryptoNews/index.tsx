import Container from "../Common/ContainerWrapper";
import { Loader } from "../Common/Loader";
import NewsGrid from "../Common/NewsGrid";
import SectionWrapper from "../Common/SectionWrapper";
import useNewsData from "../Hooks/useNewsData";

const News = () => {
  const { data, isFetching, isError } = useNewsData();
  const news = data;
  return (
    <Container>
      <SectionWrapper className="min-h-screen">
        {isFetching ? (
          <Loader />
        ) : isError ? (
          <div className="flex justify-center items-center">
            <h2>{`${isError}`}</h2>
          </div>
        ) : (
          <NewsGrid data={news || []} />
        )}
      </SectionWrapper>
    </Container>
  );
};

export default News;
