import React from "react";

export default function Column(props) {
  return props.item.map((item) => <div className="column">{item}</div>);
}
