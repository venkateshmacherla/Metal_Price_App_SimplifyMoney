# Metal Prices App (React Native)

## Overview

This is a React Native mobile application that displays **live prices of precious metals** such as Gold, Silver, Platinum, and Palladium.

The app simulates a **real-world financial product experience** with dynamic data, independent loading states, and detailed insights for each metal.

---

## Features

* Display prices for:

  * Gold
  * Silver
  * Platinum
  * Palladium

* **Independent Loading States**

  * Each metal fetches data separately

* **Error Handling**

  * Handles API failures gracefully
  * Retry option per metal

* **Dynamic Mock API**

  * Simulates real API behavior (delay + random failures)

* **Navigation**

  * Click on a metal → View detailed screen

* **Details Screen Includes**

  * Current price
  * Previous open & close prices
  * Date & time

---

## Tech Stack

* React Native (Expo)
* React Navigation
* JavaScript (ES6+)

---

## Project Structure

```
src/
  components/
    MetalCard.js
  screens/
    HomeScreen.js
    DetailsScreen.js
  services/
    api.js
App.js
```

---

## Data Handling

Instead of using a real API, a **mock API service** was implemented using Promises.

This simulates:

* Network delay
* Random API failures
* Dynamic price updates

```js
export const fetchMetalPrice = async (metal) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
```

---

## Installation & Setup

1. Clone the repository

```
git clone <your-repo-link>
```

2. Navigate to project

```
cd MetalPricesApp
```

3. Install dependencies

```
npm install
```

4. Run the app

```
npx expo start
```

5. Scan QR code using Expo Go (Android/iOS)

---

## Key Highlights

* Clean and reusable component structure
* Realistic API simulation
* Independent state handling per item
* Responsive grid UI layout
* Enhanced UX with retry mechanism


## Author

Venkatesh Macharla

---

## Note

This project was built as part of a **Frontend Intern Assignment** to demonstrate:

* UI/UX design
* State management
* API handling
* Navigation in React Native
