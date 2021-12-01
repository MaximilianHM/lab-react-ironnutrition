import { useState } from "react";
import { Divider, Input } from "antd";

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    addNewFood(newFood);

    setName("");
    setImage("");
    setCalories(1);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>Name:</label>
      <Input name="name" value={name} type="text" onChange={handleName} />
      <label>Image:</label>
      <Input
        name="image"
        value={image}
        type="text"
        alt="food"
        onChange={handleImage}
      />
      <label>Calories:</label>
      <Input
        name="calories"
        value={calories}
        type="number"
        onChange={handleCalories}
      />
      <label>Servings:</label>
      <Input
        name="servings"
        value={servings}
        type="numner"
        onChange={handleServings}
      />
      <button>Add food</button>
    </form>
  );
}

export default AddFoodForm;
