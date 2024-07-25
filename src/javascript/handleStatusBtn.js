import { statusBtn, statusBanner } from "./config.js"

export const handleStatusBtn = (() => {

  if (statusBtn && statusBanner) {
    statusBtn.addEventListener("click", toggleStatusBanner);
  } else {
    console.warn("Menu button or status banner not found.");
  }

  function toggleStatusBanner() {
    statusBanner.classList.toggle("flex");
  }

  //   return { remove if unused later....

  //   };
})();
