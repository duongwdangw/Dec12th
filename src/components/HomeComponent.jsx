import React,{useState} from "react";
import MenuItem from "./MenuItem";


function Menu(props){
    const menuData1=["WD","SanDick","Silicon","Acer","Samsung"];
    const menuData2=["John Hardy","Solid Gold","While Gold","Pierce Owl"];
    const menuData3=["BackPack","T-Shirt","Jacket","Slim Fit"];
    const menuData4=["BIYLACLESEN","LOCK & LOVE","Rain Jacket","MBJ","Opna","DANVOUY"]


    return(
        <ul style={{fontSize:"20px"}}>
            <MenuItem title="ELECTRONICS" data={menuData1}></MenuItem>
            <MenuItem title="ELECTRONICS" data={menuData2}></MenuItem>
            <MenuItem title="ELECTRONICS" data={menuData3}></MenuItem>
            <MenuItem title="ELECTRONICS" data={menuData4}></MenuItem>

        </ul>
    )
}






export default Menu;