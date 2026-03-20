export const fetchMetalPrice = async (metal) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Random error simulation (realistic)
      if (Math.random() < 0.1) {
        reject("Failed to load " + metal);
      } else {
        resolve({
          name: metal,
          price: (Math.random() * 5000 + 1000).toFixed(2),
          time: new Date().toLocaleTimeString(),
        });
      }
    }, 1000 + Math.random() * 1000);
  });
};