import React from "react";
import Column from "./column/Column";
import "./logic.css";

export default function Logic() {
  const state = {
    itemCol: [
      {
        id: 1,
        row: 1,
        title: "Сумма",
        value: "",
        active: "active",
      },
      {
        id: 2,
        row: 1,
        title: "Дата",
        value: "",
        active: "",
      },
      {
        id: 3,
        row: 1,
        title: "Фирма от",
        value: "",
        active: "",
      },
    ],
  };

  //       // "Фирма Куда",
  //       // "№ машины",
  //       // "Зп водителя",
  //       // "Бензин",
  //       // "За лом",
  //       // "Амортиз.",
  //       // "Доп",
  //       // "Итого",
  //       // "Вид Лома",
  //       // "Вес",
  //       // "Сред. Цена",
  //       // "Прибыль",
  //       // "Цена реализации",
  //       // "Доп",
  //       // "Долг Нам",
  //       // "Долг Мы",
  //       // "Приход",
  //       // "Примечание",

  return (
    <div className="baza--logic">
      <div className="row">
        <div className="row-info"></div>
        <div className="row-data">
          <Column item={state.itemCol} />
        </div>
      </div>
    </div>
  );
}
