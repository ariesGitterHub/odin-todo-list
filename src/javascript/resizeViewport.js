import { createTasks } from "./taskContent";

// export function resizeViewport(array1) {
//   if (window.innerWidth >= 600) {
//     console.log("Breakpoint 0f 600px.");
//     createTasks(array1)

//   } else {
//     console.log("Mobile view");
//     createTasks(array1);
//   }
// }


export function resizeViewport(array1) {
  if (window.innerWidth >= 600) {
    console.log("Breakpoint 0f 600px.");
    createTasks(array1)

  } else {
    console.log("Mobile view");
    createTasks(array1);
  }
}
