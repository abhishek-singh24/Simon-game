# 🎮 Simon Game

A simple **Simon Game** built using **HTML, CSS, and JavaScript**.

The player has to remember and repeat the sequence of colored buttons shown by the game. With each level, a new color is added to the sequence.

## 📌 Features

* Start the game by pressing any key.
* Random color sequence is generated automatically.
* Each level adds a new color to the sequence.
* Buttons flash to show the game sequence.
* User button clicks are highlighted.
* Checks whether the user's sequence is correct.
* Displays **Game Over** when the wrong button is pressed.
* Game resets automatically after Game Over.
* Level counter shows the current level.

## 🛠️ Technologies Used

* **HTML5** – Structure of the game
* **CSS3** – Styling and button design
* **JavaScript** – Game logic and functionality

## 📂 Project Structure

```text
Simon-Game/
│
├── index.html
├── simon.css
├── script.js
└── README.md
```

## 🎮 How to Play

1. Open `index.html` in your web browser.
2. Press **any key** to start the game.
3. Watch the button that flashes.
4. Click the same button.
5. In the next level, remember the previous sequence and click the buttons in the correct order.
6. Continue until you press the wrong button.
7. When you make a mistake, the game displays **Game Over**.
8. Press any key to start a new game.

## 🧠 How the Game Works

### 1. Game Start

The game starts when the user presses any key.

```javascript
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelup();
    }
});
```

### 2. Random Button

A random color is selected from:

```javascript
let btn = ["red", "yellow", "green", "purple"];
```

The selected color is added to the game sequence.

### 3. Button Flash

The selected button temporarily changes its appearance so the player can remember it.

```javascript
function gameFlash(a) {
    a.classList.add("Flash");

    setTimeout(() => {
        a.classList.remove("Flash");
    }, 500);
}
```

### 4. User Input

When the player clicks a button, its color is added to the user's sequence.

```javascript
let usercolor = item.getAttribute("id");
userSeq.push(usercolor);
```

### 5. Answer Checking

The game compares the user's sequence with the game's sequence.

```javascript
if (userSeq[Idx] == gameSeq[Idx]) {
    // Correct answer
} else {
    // Game Over
}
```

### 6. Game Over

If the player clicks the wrong button, the game displays the Game Over message and resets the game.

## 🎨 Colors Used

| Button | Color  |
| ------ | ------ |
| Red    | Orange |
| Yellow | Pink   |
| Green  | Cyan   |
| Purple | Green  |

## 🚀 Future Improvements

The project can be improved by adding:

* 🔊 Sound effects
* 📱 Mobile responsive design
* 🏆 High-score system
* ⏱️ Timer
* 🎵 Different sounds for each button
* 🎨 Better animations
* 🌓 Dark/Light mode
* 🏅 Best score tracking

## 👨‍💻 Author

**Abhishek Gariya**

## 📄 License

This project is created for **learning and educational purposes**.

```

You can save this content as **`README.md`** in the same folder as `index.html`, `simon.css`, and `script.js`.
```
