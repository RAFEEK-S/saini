import React, { useState } from "react";

const TabsComponent = () => {
  const list = [
    {
      name: "profie",
      description: "write your profile",
    },
    {
      name: "details",
      description: "write your details",
    },
    {
      name: "message",
      description: "write your message",
    },
  ];

  const [info, setInfo] = useState(0);

 const handleClickInfo = (name) =>{
        list.map((item,index) => {
            if(item.name === name){
                setInfo(index)
            }
        })

    }
  return (
    <div>
      {list?.map((info, index) => (
        <>
          <button type="button" key={index} onClick={()=>handleClickInfo(info.name)}>
            {info.name}
          </button>
        </>
      ))}
      <p>{list[info].description}</p>
    </div>
  );
};

export default TabsComponent;
