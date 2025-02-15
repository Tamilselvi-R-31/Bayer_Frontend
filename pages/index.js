import Head from 'next/head';
//import Header from '../components/common/header';
//import Home from '../components/common/home';
import '../styles/globals.css';

export default function App() {
  return (
    <div>
      <Head>
        <title>Bayer Healthcare</title>
      </Head>
      {/*<Header />*/}
      <main className="main-content">
        <h2>Your Health, Our Priority</h2>
        <p>Explore the latest health information and resources from Bayer Healthcare.</p>
        {/*<Home />*/}
      </main>
    </div>
  );
}
