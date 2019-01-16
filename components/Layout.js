import Head from 'next/head';
import Header from './Header'

const Layout = (props) => (
    <div>
        <Head>
            <title>Near Earth Objects</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css" />
        </Head>
        <div className="container">
            <Header />
            {props.children}
        </div>
    </div>
)

export default Layout;