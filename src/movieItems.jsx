const MovieItem = ({ movie }) => {
    return (
        <div className="my-4 container" >
            <div className="card">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} className="card-img-top" alt={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} />
                <div className="card-body">
                    <h3>{movie.Title}</h3>
                    <div>{movie.Year}</div>
                </div>
            </div>
        </div >
    );
}

export default MovieItem;
