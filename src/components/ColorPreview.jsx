function ColorPreview({ color }) {
  return (
    <div>
      <div
        className={`preview-box ${!color ? "empty" : ""}`}
        style={{
          backgroundColor: color?.value || "#f8f9fa",
        }}
      >
      
        {!color && (
          <div className="empty-preview">
            <span className="palette-icon">🎨</span>
            <p>Select a Color</p>
          </div>
        )}
      </div>

      {color && (
        <>
          <p className="selected-label">
            Selected Color
          </p>

          <h1
            className="selected-name"
            style={{
              color:
                color.name === "Yellow"
                  ? "#B8860B"
                  : color.value,
            }}
          >
            {color.name}
          </h1>

          <p className="hex-code">
            {color.value}
          </p>
        </>
      )}
    </div>
  );
}

export default ColorPreview;