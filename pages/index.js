import Languages from "../components/Languages";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="HomePage">
      <div className="flex flex-col items-center mt-24 md:mt-28 lg:mt-36 xl:mt-36">
        <h1 className="text-whiteRabbit text-7xl">Hello world,</h1>
        <span className="flex flex-row gap-4">
          <h1 className="text-whiteRabbit text-7xl">I am</h1>
          <h1 className="text-emphasis text-7xl">William Louis-Louisy</h1>
        </span>
        <h2 className="text-whiteRabbit text-4xl mt-12">
          Full stack developer based in Lyon
        </h2>
        <Languages />
        <h3 className="text-whiteRabbit text-3xl mt-12">
          I am currently looking for a work-study contract to continue my
          training course, in particular by learning React Native.
        </h3>
      </div>
    </Layout>
  );
}
