import React from "react";
import "./App.css";
import Statement from "./Statement";

// const sArray = [yes, no];
// const statementF = () => {
//   sObj.map((ele) => <Statement statement={ele} />);
// };
// console.log(statementF)
function App() {
  return <Statement yesOrNo="yes" />;
}

export default App;
