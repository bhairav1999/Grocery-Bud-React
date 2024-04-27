import React, { useState } from "react";

const SingleItem = ({ item,removeItem,setLocalstorage }) => {
  const [ischecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name=""
        checked={ischecked}
        onChange={() => setIsChecked(!ischecked)}
        id=""
      />
      <p style={{ textTransform:"capitalize",textDecoration:ischecked && "line-through"}}>{item.name}</p>
      <button className="btn remove-btn" onClick={()=>removeItem(item.id)}>Delete</button>
    </div>
  );
};

export default SingleItem;
