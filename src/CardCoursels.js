import React, { useState } from "react";

const CardCoursels = () => {
  const imgList = [
    {
      name: "image1",
      details: "dense forest",
    },
    {
      name: "image2",
      details: "mountains",
    },
    {
      name: "image3",
      details: "rivers",
    },
  ];
   const [image, setImage] = useState(0);

   const handleForward = () => {
    setImage(image + 1)
    if(image === imgList.length-1) {
        setImage(imgList.length-imgList.length)
    }
   }
   const handleBackward = () => {
    setImage(image - 1)
    if(image === imgList.length-imgList.length) {
        setImage(imgList.length-1)
    }
   }

  return (
    <div>
      <button type="button" onClick={handleForward}>NEXT</button>
      <button type="button" onClick={handleBackward}>PREVIOUS</button>
    
    <p>{imgList[image].details}</p>

    
       
       {imgList.map((_, index) => (
        <button
          key={index}
          type="button"
          style={{
            backgroundColor: image === index ? "red" : "blue",
            color: "white",
            margin: "5px",
          }}
        >
          search
        </button>
))}
      
    
    </div>
  );
};

export default CardCoursels;
