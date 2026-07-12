function ColorPreview({ color }) {
  return (
    <div>
      <div
        className="preview-box"
        style={{
          backgroundColor: color?.value || "#e5e7eb",
        }}
      >
        {!color && (
          <p className="no-color">
            No color selected yet
          </p>
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