import Head from 'next/head';
import Header from './Header'

const Layout = (props) => (
    <div>
        <Head>
            <title>Near Earth Objects</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" />
            <link rel="icon" type="image/x-icon" href="https://cdn2.iconfinder.com/data/icons/space-8/512/Meteor-512.png" />
        </Head>
        <div className="widetainer">
            <Header />
            {props.children}
        </div>
    </div>
)

export default Layout;