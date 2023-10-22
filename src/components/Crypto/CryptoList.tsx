import { coinsEndpoint } from "../../services";
import Container from "../Common/ContainerWrapper";
import CryptoGrid from "../Common/CryptoGrid";
import RenderContent from "../Common/RenderContent";
import SectionWrapper from "../Common/SectionWrapper";
import useGetCrypto from "../Hooks/useGetCrypto";

const Currencies = () => {
  const { data, isFetching, isError } = useGetCrypto({
    limit: 10,
    endpoint: coinsEndpoint,
  });
  const cryptoCoins = data?.coins;

  return (
    <Container>
      <SectionWrapper className="min-h-screen">
        <RenderContent isLoading={isFetching} isError={isError}>
          <CryptoGrid coins={cryptoCoins} />
        </RenderContent>
      </SectionWrapper>
    </Container>
  );
};

export default Currencies;
