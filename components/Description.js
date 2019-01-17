import { Button } from 'reactstrap';

const Description = () => {
    function break_machine() {
        document.getElementById('summary').innerHTML = 'Fuck';
    }
    return (
        <div>
            <div id="description">
                <span id="p-button"><Button>Peek behind curtain?</Button></span>
                <h2 id="summary">I am the Great All Knowing Space Machine. I landed here from space thousands of years ago. I have the power to see every single asteroid that will orbit around
                Earth today. I can tell you if they're dangerous or they're speed or--<br /><br /> You know what... I'll just show you.</h2>
                <span id="peek-button"><Button onClick={break_machine}>Break machine?</Button></span>
            </div>
            <style jsx>{`
                #description {
                    height:25vh;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                }
                #summary {
                    text-align:center;
                    flex-basis: 100%;
                    padding: 100px 300px;
                }
                #peek-button {
                    align-self: flex-end;
                    height:80px;
                    length:20px;
                }
                #p-button {
                    visibility:hidden;
                }
            `}</style>
        </div>
    )
}

export default Description