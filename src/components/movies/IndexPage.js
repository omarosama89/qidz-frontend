import React, {useState, useEffect} from "react";
import {getMovies} from "../../api/moviesApi";
import Filter from "./Filter"

function IndexPage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies().then(_movies => {
            setMovies(_movies)
        })
    }, []);
    function callBack(e){
        getMovies(e.target.value).then(_movies => {
            setMovies(_movies)
        })
    }
    return (
        <>
            <Filter callback={callBack}/>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr key='0'>
                        <th key='id'>#</th>
                        <th key='fn'>Movie</th>
                        <th key='ln'>Description</th>
                        <th key='addr'>year</th>
                        <th key='addr'>Director</th>
                        <th key='addr'>Actor</th>
                        <th key='addr'>Filming Location</th>
                        <th key='addr'>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(_movie => {
                        return (
                            <>
                                <tr key={_movie.id}>
                                    <td>{_movie.id}</td>
                                    <td>{_movie.movie}</td>
                                    <td>{_movie.description}</td>
                                    <td>{_movie.year}</td>
                                    <td>{_movie.director}</td>
                                    <td>{_movie.actor}</td>
                                    <td>{_movie.filming_location}</td>
                                    <td>{_movie.country}</td>
                                </tr>
                            </>
                        )
                    })}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default IndexPage;
