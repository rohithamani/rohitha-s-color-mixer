const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const mixedColorDisplay = document.getElementById('mixedColor');
const cubeFaces = document.querySelectorAll('.face');

function mixColors() {
  const color1Value = color1.value.substring(1); // Remove '#' from color value
  const color2Value = color2.value.substring(1);
  
  // Convert hex to RGB
  const r1 = parseInt(color1Value.substring(0, 2), 16);
  const g1 = parseInt(color1Value.substring(2, 4), 16);
  const b1 = parseInt(color1Value.substring(4, 6), 16);
  
  const r2 = parseInt(color2Value.substring(0, 2), 16);
  const g2 = parseInt(color2Value.substring(2, 4), 16);
  const b2 = parseInt(color2Value.substring(4, 6), 16);
  
  // Mix colors
  const mixedR = Math.floor((r1 + r2) / 2);
  const mixedG = Math.floor((g1 + g2) / 2);
  const mixedB = Math.floor((b1 + b2) / 2);
  
  // Convert RGB to hex
  const mixedColorHex = '#' + 
    mixedR.toString(16).padStart(2, '0') +
    mixedG.toString(16).padStart(2, '0') +
    mixedB.toString(16).padStart(2, '0');
  
  // Set background color of display div with animation
  mixedColorDisplay.style.backgroundColor = mixedColorHex;
  
  // Update cube faces with mixed color
  cubeFaces.forEach(face => {
    face.style.backgroundColor = mixedColorHex;
  });
}

// Event listeners for color input changes
color1.addEventListener('input', mixColors);
color2.addEventListener('input', mixColors);

// Initial mix when the page loads
mixColors();
