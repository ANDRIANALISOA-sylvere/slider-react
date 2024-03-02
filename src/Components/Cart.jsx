import React,{useState} from "react";
import Image from "./Image.jsx";
import Button from "./Button.jsx";
import {data} from '../data.js';

function Cart() {
  const iconeright = "bi-arrow-right-circle-fill";
  const iconeleft = "bi-arrow-left-circle-fill";
  const next = data.length-1;

  const [index,setIndex]=useState(0);

  function ClickRight()
  {
    if(index===data.length-1)
    {
      setIndex(0)
    }else
    {
      setIndex(index+1);
    }
  }

  function ClickLeft()
  {

    if(index===0)
    {
      setIndex(data.length-1);
    }else
    {
      
      setIndex(index-1);
    }
  }



  const CurrentImage = data[index].image;
  
  return (
    <div>
      <div style={{ float: "right" }}>
        <Button icone={iconeright} onclick={ClickRight}></Button>
      </div>
      <div>
        <Button icone={iconeleft} onclick={ClickLeft}></Button>
      </div>
      <Image CurrentImage={CurrentImage}></Image>
    </div>
  );
}

export default Cart;
