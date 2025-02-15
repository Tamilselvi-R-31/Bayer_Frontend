
import Head from 'next/head';
import Header from '../../../../components/common/Header/header';
import FeaturedTopics from '../../../../components/common/FeaturedTopics/featured-health-topics';

export default function Home() {

    return (
      <div>
       <Head>
        <title>Bayer Healthcare</title>
      </Head>
      <Header />
      <main className="main-content">
        <h2>Your Health, Our Priority</h2>
        <p>Explore the latest health information and resources from Bayer Healthcare.</p>
      </main>
      <FeaturedTopics/>
      </div>
    );
  }
  
  export async function getServerSideProps(ctx) {
      console.log("ctx---",ctx)
    // Api call can be done here
    
    return {
      props: {
        isHomePage: true,
      },
    };
  }
  

