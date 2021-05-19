import React, {useState} from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardComp = ({input, setInput, wrongLetters, setWrongLetters, rightLetters, setRightLetters, answer}) => {
    const [layout, setLayout] = useState("default");
  
    const handleShift = () => {
      const newLayoutName = layout === "default" ? "shift" : "default";
      setLayout(newLayoutName);
    };
  
    const onKeyPress = button => {
      if (button === "{shift}" || button === "{lock}") handleShift();
      if (rightLetters.includes(button)) {
        return;
      } else if (wrongLetters.includes(button)) {
        return;
      }
      if (answer.includes(button)) {
        setRightLetters([...rightLetters, button])
      } else {
        setWrongLetters([...wrongLetters, button])
      }
    };
  
    return (
      <div className="App">
        <Keyboard
          layoutName={layout}
          onKeyPress={onKeyPress}
        />
      </div>
    ); 
}

export default KeyboardComp;