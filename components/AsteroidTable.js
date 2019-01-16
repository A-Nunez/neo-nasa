const AsteroidTable = (props) => {
    const asteroidData = props.neoData
    const meteorData = asteroidData.map((asteroid) => {
        return (
            <tr key={asteroid.id}>
                <td className="table-cell"><p className="table-name">{asteroid.name}</p></td>
                <td className="table-cell"><p className="table-size">{Math.round(asteroid.estimated_diameter.feet.estimated_diameter_max - asteroid.estimated_diameter.feet.estimated_diameter_min)}</p></td>
                <td className="table-cell"><p className="table-speed">{Math.round(asteroid.close_approach_data[0].relative_velocity.miles_per_hour)}</p></td>
                <td className="table-cell"><p className="table-mag">{asteroid.absolute_magnitude_h}</p></td>
                <td className="table-cell"><p className="table-dangerous">{asteroid.is_potentially_hazardous_asteroid ? 'Yes...' : 'Nah'}</p></td>
                <style jsx>{`
                    td{
                        padding:35px 0px;
                        text-align:center;
                    }

                    .table-cell{
                        color:whitesmoke;
                        font-size:1.3em;
                        font-weight:550;
                    }

                    .table-name {
                        display:inline;
                        color:black;
                        background-color: #999999;
                        border-radius:50px;
                        padding: 5px 10px;
                        font-weight:650;
                        font-size:1.1em;
                    }
                `}
                </style>
            </tr>
        )
    })
    console.log(props.neoData)
    return (
        <table className="data-table table" width="100%">
            <thead>
                <tr className="header-row">
                    <th><p className="table-header">Name</p></th>
                    <th><p className="table-header">Estimated Diameter</p></th>
                    <th><p className="table-header">Velocity</p></th>
                    <th><p className="table-header">Magnitude</p></th>
                    <th><p className="table-header">Potentially Dangerous</p></th>
                </tr>
            </thead>
            <tbody>
                {meteorData}
            </tbody>
            <style jsx>{`
                .table-header {
                    color:whitesmoke;
                    text-align:center;
                    text-decoration:underline;
                    padding: 35px 0;
                    font-weight:750;
                    font-size:1.4em;
                }
            `}</style>
        </table>
    )
}

export default AsteroidTable;