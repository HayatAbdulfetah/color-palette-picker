function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={isSelected ? "selected" : ""}
      style={{
        backgroundColor: color.value,
        color: color.name === "Yellow" ? "black" : "white",
      }}
    >
      {color.name}
    </button>
  );
}

export default ColorButton;