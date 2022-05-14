import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation'
import Footer from '../Footer'
import './index_mainframe.css'

const MainFrame = () => (
        <>
        <Navigation />
        <Outlet />
        <Footer />
        </>
    )
export default MainFrame