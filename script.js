let seedColor = document.querySelector(".seed-color");
let schemeEl = document.querySelector(".scheme");
const formEl = document.querySelector("form");


formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = `https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(
    1
  )}&mode=${schemeEl.value}&count=5`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let colorHtml = "";
      let nameHtml = "";

      for (let color of data.colors) {
        console.log(color.hex.value);

        colorHtml += `
          <div class="color" style='background-color: ${color.hex.value}'></div>
        `;

        document.querySelector(".scheme-palette").innerHTML = colorHtml;

        nameHtml += `
          <div class='color-name'>${color.hex.value}</div>
        `;
      }

      document.querySelector(".color-names").innerHTML = nameHtml;
    });
});
