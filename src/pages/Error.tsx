import Navigation from '../components/Navigation';

function Error(props: any) {
    return (
        <>
            <Navigation />
            <main>
                <h1>An error has occured!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
}

export default Error;