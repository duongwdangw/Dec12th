import { useEffect, useState } from "react";

function MenuItem(props) {
  const [searchArr, setSearchArr] = useState([]);

  useEffect(() => {
    console.log(searchArr);
  }, [searchArr.length]);

  const searchCheckbox = (event, item) => {
    console.log(event.target.checked);
    console.log(item);
    if (event.target.checked) {
      // if(item === "Men's clothing" || item === "Women's clothing"){
      //   item="clothes"
      // }else if(item==="Electronics"){
      //   item="elec"
      // }
      setSearchArr([...searchArr, item.toLowerCase()]);
      props.y([...searchArr, item.toLowerCase()]);
    } else {
      let rs = searchArr;
      rs.pop(item);
      setSearchArr(rs);
      props.y(rs);
    }
    console.log(searchArr);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "0 10px",
        border: "solid 1px",
        borderBlockWidth: "5px",
        height: "150px",
      }}
    >
      <strong style={{ fontSize: "35px" }}>{props.title}</strong>
      <ul>
        {props.data.map((item) => {
          return (
            <div>
              <input
                type="checkbox"
                style={{ cursor: "pointer" }}
                onChange={(event) => {
                  searchCheckbox(event, item);
                }}
                key={item}

                // console.log(event.target.checked);
              />
              <label
                style={{ color: "gray", padding: "7px", fontSize: "13px" }}
              >
                {item}
              </label>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuItem;
