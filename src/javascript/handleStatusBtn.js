import { statusBtn, statusBanner } from "./config.js"

export const handleStatusBtn = (() => {

  if (statusBtn && statusBanner) {
    statusBtn.addEventListener("click", toggleStatusBanner);
  } else {
    console.warn("Warning: statusBtn or statusBanner components missing.");
  }

  function toggleStatusBanner() {
    statusBanner.classList.toggle("flex");
  }

  //   return { remove if unused later....

  //   };
})();
