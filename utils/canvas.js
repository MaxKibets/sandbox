// Select a canvas element
const canvas = document.querySelector("");

// Get the canvas context
const saveBlob = (function () {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";

  return function saveData(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
  };
})();

// Save the canvas as an image
canvas.toBlob((blob) => {
  saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
});
