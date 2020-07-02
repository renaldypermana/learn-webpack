import moment from "moment";
import "./style.scss";

import { getUsers } from "./common/usersAPI";
/*const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();*/

console.log("Hello webpack!");

const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json));
  });
});