// import { set } from 'immer/dist/internal';
import React from 'react'
import { useState, useEffect } from 'react'
function Animantion() {

    const [currentText, setCurrentText] = useState("My name is valens NIYONSENGA");
    const [index, setIndex ] = useState(0);
    const [text, setText ] = useState("hi");

    useEffect(() => {
        while(index < currentText.length){
          console.log(currentText);
              setTimeout(() => {
                setText(text + currentText[index]);
                setIndex(index + 1);
              }, 40)
        }
    },)

  return (
    <div>{text}</div>
  )
}

export default Animantion