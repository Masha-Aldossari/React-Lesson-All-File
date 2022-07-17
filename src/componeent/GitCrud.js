import React, { useEffect, useState } from "react";
import axios from "axios";

function GitCrud() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {data.map((e) => (
          <li>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default GitCrud;
