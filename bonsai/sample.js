var square = new Rect(0, 0, 50, 50);
square.addTo(stage);
square.fill('red');
square.animate(new KeyframeAnimation('2s', {
  from: { x: 0, y: 0 },
  '50%': { x: 100, width: 50, height: 50, fillColor: 'yellow' },
  to: { x: 0, y: 0, fillColor: 'black', width: 50, height: 50 }
}));

console.log(square)
