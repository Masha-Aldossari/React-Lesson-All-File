import "./App.css";
import Nav from "./componeent/Nav";
import Section from "./componeent/Store";
import Footer from "./componeent/Footer";
import Card from "./componeent/Card";
import CardData from "./componeent/CardData";
import IsLogIn from "./componeent/IsLogIn";
import State from "./componeent/State";
import Axios from "./componeent/Axios";
import GitCrud from "./componeent/GitCrud";
import Create from "./componeent/Create";
import Home from "./componeent/Home";
import Update from "./componeent/Update";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import { useState } from "react";
// import ToDo from "./componeent/ToDo";

function App() {
  // هنا  عرفت متغير واخذت اسم ملف البيانات
  // وسويت عليه الماب واضفت اسم الكاردز في البروبس عشان يتعرف عليها
  // let CardName = CardData.map((cards) => {
  //   return <Card cards={cards} />;
  // });
  // const [isLogIn, setIsLogIn] = useState(false);
  // const login = false;

  return (
    <>
      {/* <GitCrud></GitCrud> */}

      <Router>
        {/* <Axios></Axios> */}
        {/* <nav>
          <Link to="/Axios"></Link>
        </nav> */}
        <Routes>
          <Route>
            <Route path="/"></Route>
            <Route path="Home" element={<Home />}></Route>

            <Route path="create" element={<Create />}></Route>
            <Route path="update" element={<Update />}></Route>
          </Route>
        </Routes>
      </Router>
      {/* {login && <p>Hello you are login</p>}
      {!login && <p>you shuld be login first</p>} */}

      {/* <button onClick={() => setIsLogIn(!isLogIn)}>logIn</button>
      {isLogIn && <IsLogIn />}
      {isLogIn ? <IsLogIn /> : <p>you shuld be login first</p>} */}
      {/* هنا استدعيت اسم المتغير */}
      {/* <div className="App">{CardName}</div> */}
      {/* <IsLogIn></IsLogIn> */}
      {/* <Nav />
      <Section /> */}
      <hr />
      {/* <Card name="lamia" />
      <Card name="Masha" />
      <Card name="Nora" /> */}
      {/* <Footer /> */}

      {/* <State></State> */}
      {/* <ToDo></ToDo> */}
    </>
  );
}

export default App;

//
//
//
