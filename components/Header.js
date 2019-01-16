const Header = () => {
    return (
        <div className="header">
            <h1 className="mb-4 title">Near Earth 'Stroids</h1>

            <style jsx>{`
                .title {
                    color:skyblue;
                    padding-top:30px;
                    padding-bottom:20px;
                    font-size:5em;
                    display:flex;
                    justify-content:center;
                }
            `}</style>
        </div>
    )
}

export default Header