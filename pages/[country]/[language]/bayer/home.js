 


export default function Home({ data }) {

    return (
      <div>
        <h1>Welcome
        </h1>
        <p>Data: {data}</p>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    // Fetch data from an API or database
    
    return {
      props: {
        data: 'No data available',
      },
    };
  }
  

