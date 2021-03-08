import { HomePage, MeoAnhLongNgan, FIP, FIV, SuyThan, Catrang } from "./container";

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
    path: "/benh/fip",
    component: () => <FIP></FIP>,
  },
  {
    path: "/benh/fiv",
    component: () => <FIV></FIV>,
  },
  {
    path: "/benh/suythan",
    component: () => <SuyThan></SuyThan>,
  },
  {
    path: "/hat/catrang",
    component: () => <Catrang></Catrang>,
  },
  {
    path: "/*",
    component: () => <h1>404 Page</h1>,
  },
];
