import { useRouter } from "next/router";

const Sidebar = () => {

    const router = useRouter();
    const { country, language } = router.query;
  return (
    <div className='sidebar-section'>
        <h4>Bayer Health</h4>

        <ul className="menuList">
            <li onClick={() => router.push(`/${country}/${language}/bayer/patient/dashboard`)}>Dashboard</li>
            <li onClick={() => router.push(`/${country}/${language}/bayer/patient/profile`)}>My Profile</li>
            <li onClick={() => router.push(`/${country}/${language}/bayer/patient/metrics`)}>Health Metrics</li>
            <li onClick={() => router.push(`/${country}/${language}/bayer/patient/messages`)}>Messages</li>
            <li onClick={() => router.push(`/`)}>Logout</li>
        </ul>
      
    </div>
  )
}

export default Sidebar
