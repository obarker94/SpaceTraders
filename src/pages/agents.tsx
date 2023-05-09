import { PageLayout } from "SpaceTraders/components/atoms/PageLayout/PageLayout";
import { Header } from "SpaceTraders/components/molecules/Header/Header";
import { AgentsBody } from "SpaceTraders/components/organisms/AgentsBody/AgentsBody";
import { type NextPage } from "next";


const Agents: NextPage = () => {

  return (
    <PageLayout className="max-h-screen overflow-hidden">
      <Header />
      <AgentsBody />
    </PageLayout>
  )

};

export default Agents;


