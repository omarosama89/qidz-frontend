import React, { useState, useEffect } from "react";
import { getActors } from "../../api/moviesApi";

function CustomerFilter(props) {
  const [actors, setActors] = useState([]);
  useEffect(() => {
      getActors().then(_actors => { setActors(_actors) })
  }, [])

  return (
    <>
      <label className="label label-default">by Actor:</label>

      <select className="form-control" onChange={props.callback}>
        <option key='0' value={undefined}></option>
        {actors.map(_actor => {
          return (
            <option key={_actor} value={_actor}>{_actor}</option>
          )
        })}
      </select>
    </>
  );
}

export default CustomerFilter;


