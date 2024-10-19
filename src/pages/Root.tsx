import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Root(props: any) {
    return (
        <>
            <Navigation />
            <h1>this is root </h1>
            <Outlet />
            <div className='h-screen' />
            <div className='h-screen' />
        </>
    );
}

export default Root;