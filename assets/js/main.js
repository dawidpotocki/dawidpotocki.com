---
---

document.querySelectorAll(".onclick-copy").forEach((element) => {
  element.classList.add("a");
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


fillMail(
  [
    "{{ site.personal_mail[0] }}",
    "{{ site.personal_mail[1] }}",
    "{{ site.personal_mail[2] }}",
    "{{ site.personal_mail[3] }}",
  ],
  ".personal-mail"
);

function fillMail(address, fillElement) {
  document.querySelectorAll(`${fillElement}`).forEach((element) => {
    element.textContent = "";
    for (i = 0; i < address.length; i++) {
      element.innerHTML += `<span>${address[i]}</span>`;
    }
  });
}


let canStartCopyAnimation = true;
document.querySelectorAll(".onclick-copy").forEach((element) => {
  element.addEventListener("click", (e) => {
    navigator.clipboard.writeText(element.textContent).then(
      async () => {
        if (canStartCopyAnimation === false) return;
        canStartCopyAnimation = false;
        document.querySelector("#clipboard").classList.remove("invisible");
        document.querySelector("#clipboard").classList.add("opacity-100");
        await sleep(3000);
        document.querySelector("#clipboard").classList.remove("opacity-100");
        canStartCopyAnimation = true;
        await sleep(1000);
        if (canStartCopyAnimation === false) return;
        document.querySelector("#clipboard").classList.add("invisible");
      }
    );
  });
});


let navLinks = document.querySelector("#nav-links");
let hamburger = document.querySelector("#hamburger")

if (hamburger.checked === false)
  navLinks.setAttribute("aria-expanded", "false");
else navLinks.setAttribute("aria-expanded", "true");

hamburger.addEventListener("click", (e) => {
  if (navLinks.getAttribute("aria-expanded") === "false")
    navLinks.setAttribute("aria-expanded", "true")
  else navLinks.setAttribute("aria-expanded", "false");
});
