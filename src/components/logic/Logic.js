import React from "react";
import Column from "./column/Column";
import "./logic.css";

export default function Logic() {
  const itemCol = [
    "Сумма",
    "Дата",
    "Фирма от",
    "Фирма Куда",
    "№ машины",
    "Зп водителя",
    "Бензин",
    "За лом",
    "Амортиз.",
    "Доп",
    "Итого",
    "Вид Лома",
    "Вес",
    "Сред. Цена",
    "Прибыль",
    "Цена реализации",
    "Доп",
    "Долг Нам",
    "Долг Мы",
    "Приход",
    "Примечание",
  ];
  return (
    <div className="baza--logic">
      <div className="row">
        <div className="row-info"></div>
        <div className="row-data">
          <Column item={itemCol} />
        </div>
      </div>
    </div>
  );
}
