//  *** ==== SINGLE AGE FUNTIONALITY ===== ***

const singleAge = document.querySelectorAll(".singleAge");
let options = "";

for (let i = 10; i <= 80; i++) {
  options += `<option value="${i}">${i}</option>`;
}

singleAge.forEach(function (select) {
  select.innerHTML = options;
});

