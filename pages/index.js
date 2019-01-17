import Layout from '../components/Layout';
import AsteroidTable from '../components/AsteroidTable';
import Description from '../components/Description'
import Fetch from 'isomorphic-unfetch'

const Index = (props) => {
    return (
        < Layout >
            <div>
                <Description />
                <AsteroidTable neoData={props.neoData} />
            </div>
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