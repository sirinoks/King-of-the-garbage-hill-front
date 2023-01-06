<template>
  <div class="container">
    <div class="buttons">
      <!--Buttons here-->
      <div class="gobutton">
        <button class="go" role="button">Go</button>
      </div>
      <div class="extras">
        <button class="undo">X</button>
        <button class="auto">A</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
div {
  display: flex;
}

button {
  cursor: pointer;
  border-width: 0;
  color: #36395a;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  background-color: #fcfcfd;
  box-sizing: border-box;
  transition: box-shadow 0.15s, transform 0.15s;
  will-change: box-shadow, transform;
}
.container {
  height: 6vh;
  background-color: #fcfcfd3f;
  justify-content: center;
}
.buttons {
  display: flex;
  width: 60%;
}

.gobutton {
  flex-grow: 3;
}
.extras {
  flex-direction: column;
  flex-grow: 1;
}

.extras button {
  align-items: center;
  z-index: 3;
  font-size: 1rem;
  align-items: stretch;
  height: 100%;
}

.go {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;
  font-size: 1.2rem;
  z-index: 2;
}

.container button:focus {
  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.container button:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.go:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
  background-color: green;
  color: white;
}

.undo:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
  background-color: red;
  color: white;
}
.auto:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
  background-color: orange;
  color: white;
}
</style>
