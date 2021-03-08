import { HomePage } from "./container";
export default [
  {
    path: "/home",
    component: () => <HomePage></HomePage>,
  },
  {
    path: "/cat",
    component: () => <h1>CAT</h1>,
  },
  {
    path: "/*",
    component: () => <h1>404 Page</h1>,
  },
];
