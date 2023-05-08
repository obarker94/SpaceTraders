import { PageBody } from "SpaceTraders/components/atoms/PageBody/PageBody";
import { PageLayout } from "SpaceTraders/components/atoms/PageLayout/PageLayout";
import { Header } from "SpaceTraders/components/molecules/Header/Header";
import { QuickStart } from "SpaceTraders/components/organisms/QuickStart/QuickStart";
import { type NextPage } from "next";


const Home: NextPage = () => {

  return (
    <PageLayout>
      <Header />
      <PageBody>
        <QuickStart />
      </PageBody>
    </PageLayout>
  )
};

export default Home;


