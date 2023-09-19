import './App.css';

const Nav = (props) => {

    return (
        <div className="container">
            <div className="text-center my-5">

                <h1 className="container" style={{ fontWeight: "bold" }}>MovieLand</h1>
            </div>
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()} className="my-5 d-flex" role="search">
                    <input
                        style={{ fontSize: "large", fontWeight: "500" }}
                        className="form-control me-2"
                        placeholder="Search for movies"
                        value={props.Search}
                        onChange={(e) => props.updateSearch(e.target.value)}
                    />
                    <button className="btn btn-outline-success" onClick={() => props.updateMovies()} type="submit" id="mySearchbtn">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Nav;
