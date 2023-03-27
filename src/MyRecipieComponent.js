function MyRecipeComponent({ label, image, calories, ingredients }) {
  return (
    <div>
      <h2>{label}</h2>
      <img src={image} alt="recipe pic" />
      <h4>{calories.toFixed()} calories</h4>
      <ul className="list">
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyRecipeComponent;
