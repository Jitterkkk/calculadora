const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erro";
      }
    } else {
      display.value += value;
    }
  });
});
