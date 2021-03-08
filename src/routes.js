import { HomePage, MeoAnhLongNgan } from "./container";
export default [
  {
    path: "/home",
    component: () => <HomePage></HomePage>,
  },
  {
    path: "/meoanhlongngan",
    component: () => <MeoAnhLongNgan />,
  },
  {
    path: "/*",
    component: () => <h1>404 Page</h1>,
  },
];
