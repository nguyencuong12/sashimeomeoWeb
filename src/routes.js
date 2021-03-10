import { HomePage, MeoAnhLongNgan, FIP, FIV, SuyThan, Catrang } from "./container";
import { Ny11, Ny12, Ny25 } from "./container/Meo/BlackGolden";

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
    path: "/muabanmeo/ny11",
    component: () => <Ny11></Ny11>,
  },
  {
    path: "/muabanmeo/ny12",
    component: () => <Ny12></Ny12>,
  },
  {
    path: "/muabanmeo/ny25",
    component: () => <Ny25></Ny25>,
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
