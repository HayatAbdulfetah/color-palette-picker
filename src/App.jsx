import { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [hexInput, setHexInput] = useState("");
  const [error, setError] = useState("");
  const colors = [
    { id: 1, name: "Red", value: "#FF0000" },
    { id: 2, name: "Blue", value: "#0000FF" },
    { id: 3, name: "Green", value: "#008000" },
    { id: 4, name: "Yellow", value: "#FFFF00" },
    { id: 5, name: "Purple", value: "#800080" },
    { id: 6, name: "Orange", value: "#FFA500" },
    { id: 7, name: "Pink", value: "#FFC0CB" },
    { id: 8, name: "Brown", value: "#A52A2A" },
    { id: 9, name: "Black", value: "#000000" },
    { id: 10, name: "Gray", value: "#808080" },
  ];
  function handleHexColor() {
    const hexPattern = /^#([A-Fa-f0-9]{6})$/;

    if (!hexPattern.test(hexInput)) {
      setError("Please enter a valid HEX color.");
      return;
    }

    setError("");

    const existingColor = colors.find(
      (color) => color.value.toLowerCase() === hexInput.toLowerCase(),
    );

    if (existingColor) {
      setSelectedColor(existingColor);
    } else {
      setSelectedColor({
        id: Date.now(),
        name: "Custom Color",
        value: hexInput.toUpperCase(),
      });
    }

    setHexInput("");
  }

  return (
    <div className="container">
      <h1>🎨 Color Palette Picker</h1>
      <p className="subtitle">Click a color to preview it.</p>

      <form
        className="hex-input-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleHexColor();
        }}
      >
        <input
          type="text"
          placeholder="Enter HEX code e.g #FF5733"
          value={hexInput}
          onChange={(e) => setHexInput(e.target.value)}
        />

        <button type="submit" className="apply-btn">
          Apply
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="button-container">
        {colors.map((color) => (
          <ColorButton
            key={color.id}
            color={color}
            onClick={() => setSelectedColor(color)}
            isSelected={selectedColor?.id === color.id}
          />
        ))}
      </div>

      <div className="preview-section">
        <ColorPreview color={selectedColor} />
      </div>

      <button
        className="reset-btn"
        disabled={!selectedColor}
        onClick={() => setSelectedColor(null)}
      >
        Reset
      </button>

      <footer>
        Made by <strong>Hayat</strong> using React ❤️
      </footer>
    </div>
  );
}

export default App;
