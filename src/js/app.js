import { init as controllerInit } from "./controller.js";

controllerInit();

if (module.hot) {
   module.hot.accept("./controller.js", () => {
      controllerInit();
   });
}