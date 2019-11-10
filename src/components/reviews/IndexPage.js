import React, {useState, useEffect} from "react";
import { getReviews } from "../../api/reviewsApi";

function IndexPage(props) {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        getReviews().then( _reviews => setReviews(_reviews));
    }, []);

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr key='0'>
                    <th key='id'>#</th>
                    <th key='fn'>Movie</th>
                    <th key='ln'>User</th>
                    <th key='addr'>Stars</th>
                    <th key='addr'>Review</th>
                </tr>
                </thead>
                <tbody>
                {reviews.map(_movie => {
                    return (
                        <>
                            <tr key={_movie.id}>
                                <td>{_movie.id}</td>
                                <td>{_movie.movie}</td>
                                <td>{_movie.user}</td>
                                <td>{_movie.stars}</td>
                                <td>{_movie.review}</td>
                            </tr>
                        </>
                    )
                })}

                </tbody>
            </table>
        </div>
    );
}

export default IndexPage;
