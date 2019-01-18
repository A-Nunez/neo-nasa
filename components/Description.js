import { Button } from 'reactstrap';

const Description = () => {
    let stage = 0;
    function break_machine() {
        if (stage == 0) {
            stage = stage + 1
            document.getElementById('summary').innerHTML = '*side panel falls off*';
            document.getElementById('look-btn').innerHTML = 'Look Inside?';
        } else if (stage == 1) {
            document.getElementById('summary').innerHTML = "What the hell... This thing isn't from Space!! It looks like some bright and ambitious web developer just created this site using React in Next.js! Hmm interesting, looks like he fetched the data from the official NASA API for near earth objects and organized into this nice readable table. What a cool guy!";
            document.getElementById("look-btn").style.visibility = "hidden";
        }

    }
    return (
        <div>
            <div id="description">
                <span id="p-button"><Button>Kick machine?</Button></span>
                <h2 id="summary">I am the Great All Knowing Space Machine. I crash landed here on Earth from my home planet thousands of years ago. My people have the ability to see every single asteroid that will orbit around
                this planet everyday. I can show you if they're dangerous or their speed or--<br /><br /> You know what... Here, take a look.</h2>
                <span id="peek-button"><Button id="look-btn" onClick={break_machine} outline color="success">Kick machine?</Button></span>
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
                    padding: 0px 250px;
                    color: #d9d9d9;
                }
                #peek-button {
                    align-self: flex-end;
                }
                #p-button {
                    visibility:hidden;
                }
            `}</style>
        </div>
    )
}

export default Description