import Layout from '../components/Layout';
import AsteroidTable from '../components/AsteroidTable';
import Fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = (props) => {
    return (
        < Layout >
            <div>
                <div className="container description">
                    <h2>Peek behind the curtain?</h2>
                </div>
                <AsteroidTable neoData={props.neoData} />
                <Link href="/about"><a>Here</a></Link>
            </div>

            <style jsx>{`
                .description {
                    height:20vh;
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                }
            `}</style>
        </Layout >
    )
}

Index.getInitialProps = async function () {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const START_DATE = today.toISOString().slice(0, -14)
    const END_DATE = tomorrow.toISOString().slice(0, -14)
    let API_KEY = '0szojNA7sKhK8IWzDFswRYSfj0YQ6qxpo7KuUEXK';

    const results = await Fetch
        ('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + START_DATE + '&end_date=' + START_DATE + '&api_key=' + API_KEY);
    const data = await results.json();
    return {
        neoData: data.near_earth_objects[START_DATE]
    };
}

export default Index;