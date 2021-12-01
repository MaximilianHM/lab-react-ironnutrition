import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 350, margin: 10 }}>
        <img src={food.image} alt="food" height={60} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>
        <Button
          className="btn-delete"
          type="primary"
          onClick={() => deleteFood(food.name)}
        >
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
