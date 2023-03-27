function MyRecipeComponent({ label, image, calories }) {
  return (
    <div>
      <h2>{label}</h2>
      <img src={image} alt="recipe pic" />
      <h4>{calories.toFixed()} calories</h4>
    </div>
  );
}

export default MyRecipeComponent;
