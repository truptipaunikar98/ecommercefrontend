import React from "react";
import Card from "./Card";

function List({ headingBg, headingText, heading, headingCenter, products }) {
  return (
    <div>
      <h2 className={"p-1 " + (headingBg + " " + headingText + " " + headingCenter)}>{heading}</h2>
      <div className="row m-3">
        {
          products?.map((v)=>{
            return(
              <Card v={v} />
            )
          })
          
        }
        
       
      </div>
    </div>
  );
}

export default List;
