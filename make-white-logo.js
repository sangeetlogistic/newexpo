const Jimp = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/assets/expo.png');
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      if (alpha > 0) {
        // Gold/yellow typically has high red and green, low blue.
        // Dark blue has low red/green, higher blue.
        // We'll consider it "not gold" if blue > red, or if it's just generally dark (red < 100)
        
        const isGold = (red > 120 && green > 100 && blue < Math.max(red, green) - 20);
        
        if (!isGold) {
          // If it's not gold, turn the color to white
          this.bitmap.data[idx + 0] = 255; // R
          this.bitmap.data[idx + 1] = 255; // G
          this.bitmap.data[idx + 2] = 255; // B
        }
      }
    });

    await image.writeAsync('public/assets/expo-white.png');
    console.log('Successfully created expo-white.png');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
