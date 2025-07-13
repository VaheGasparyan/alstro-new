import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/home")
    }, [])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
