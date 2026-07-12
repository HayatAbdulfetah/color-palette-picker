import { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";

function App() {
    const [selectedColor, setSelectedColor] = useState(null);
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
  return (
    <div className="container">
      <h1>🎨 Color Palette Picker</h1>
      <p className="subtitle">
        Click a color to preview it.
      </p>

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
            onClick={() => setSelectedColor(null)}>
        Reset
      </button>

    
      <footer>Made by <strong>Hayat</strong> using React ❤️</footer>

    </div>
  );
}

export default App;