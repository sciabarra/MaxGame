var square = new Rect(0, 0, 100, 100);
square.addTo(stage);
square.fill('red');
square.animate(new KeyframeAnimation('2s', {
  from: { x: 0, y: 0 },
  '50%': { x: 100, y: 100, width: 50, height: 50, fillColor: 'green' },
  to: { x: 0, y: 0, fillColor: 'blue', width: 150, height: 150 }
}));

console.log(square)
