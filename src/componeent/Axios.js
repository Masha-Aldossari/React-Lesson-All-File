import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Axios() {
  // let navigate = useNavigate();
  const [post, setPost] = useState({});
  const [id, setId] = useState();
  const [idButton, setIdButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButton]);

  const handelClick = () => {
    setIdButton(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handelClick}>
        Fetch Post
      </button>
      {/* <ul>
        {post.map((posts) => (
          <li>{posts.title}</li>
        ))}{" "}
      </ul> */}
      <div>{post.title}</div>
      {/* <button onClick={navigate("Axios/id")}></button> */}
    </div>
  );
}

export default Axios;
