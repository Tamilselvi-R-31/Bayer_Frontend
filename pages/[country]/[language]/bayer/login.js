import LoginPage from "../../../../components/common/Login/LoginPage";

export default function Login() {

  return (
    <div>
      <LoginPage />
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
