import React, { useState } from "react";
import MenuItem from "./MenuItem";

function Menu(props) {
  const menuData1 = ["Men's clothing", "Women's clothing","Electronics", "Jewelery"];
  // const menuData2 = ["John Hardy", "Solid Gold", "White Gold", "Pierce Owl"];
  // const menuData3 = ["BackPack", "T-Shirt", "Jacket", "Slim Fit"];
  // const menuData4 = [
  //   "BIYLACLESEN",
  //   "LOCK & LOVE",
  //   "Rain Jacket",
  //   "MBJ",
  //   "Opna",
  //   "DANVOUY",
  // ];

  return (
    <ul>
      <MenuItem y={props.x} title="Category" data={menuData1}></MenuItem>
      {/* <MenuItem y={props.x} title="JEWELERY" data={menuData2}></MenuItem>
      <MenuItem y={props.x} title="Men's Clothing" data={menuData3}></MenuItem>
      <MenuItem y={props.x} title="Women's Clothing" data={menuData4}></MenuItem> */}
      
    </ul>
  );
}

export default Menu;
