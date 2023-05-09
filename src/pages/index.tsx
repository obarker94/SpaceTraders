import { PageLayout } from "SpaceTraders/components/atoms/PageLayout/PageLayout";
import { Header } from "SpaceTraders/components/molecules/Header/Header";
import { HomeBody } from "SpaceTraders/components/organisms/HomeBody/HomeBody";
import { type NextPage } from "next";


const Home: NextPage = () => {

  return (
    <PageLayout>
      <Header />
      <HomeBody />
    </PageLayout>
  )

};

export default Home;


