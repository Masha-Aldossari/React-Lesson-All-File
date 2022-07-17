import React from "react";

function Card(props) {
  return (
    <div>
      {/* هنا اضفا الكاردز على البروبس عشان يتعرف عليها ويقدر يسوي الماب */}
      <p>{props.cards.name}</p>
    </div>
  );
}

export default Card;
