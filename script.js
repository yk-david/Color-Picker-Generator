const seedColor = document.querySelector(".seed-color");
const schemeEl = document.querySelector(".scheme");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = `https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(
    1,
  )}&mode=${schemeEl.value}&count=5`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let colorHtml = "";
      let nameHtml = "";

      for (let i = 0; i < data.colors.length; i++) {
        colorHtml += `
          <div class='color scheme-${i}' style='background-color: ${data.colors[i].hex.value};'></div>
        `;

        document.querySelector(".scheme-palette").innerHTML = colorHtml;

        nameHtml += `
          <div class='color-name' id='scheme-${i}'>${data.colors[i].hex.value}</div>
        `;
      }

      document.querySelector(".color-names").innerHTML = nameHtml;
    });
});

const schemeCopied = document.querySelector(".scheme-palette");

schemeCopied.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);

  const getColorName = () => {
    if (e.target.className === "color scheme-0") {
      return document.getElementById("scheme-0").textContent;
    } else if (e.target.className === "color scheme-1") {
      return document.getElementById("scheme-1").textContent;
    } else if (e.target.className === "color scheme-2") {
      return document.getElementById("scheme-2").textContent;
    } else if (e.target.className === "color scheme-3") {
      return document.getElementById("scheme-3").textContent;
    } else {
      return document.getElementById("scheme-4").textContent;
    }
  };

  // console.log(getColorName());

  navigator.clipboard.writeText(getColorName());
});
