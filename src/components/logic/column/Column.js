import React from "react";

export default function Column(props) {
  return props.item.map((item) => (
    <div key={item.id} className="column">
      {item.title}
    </div>
  ));
}
