// import React from "react";

// const PrewArrow = (props) => {
//   const { className, style, onClick } = props;

//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         background: "white",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "4px",
//       }}
//       onClick={onClick}>
//     </div>
//   );
// };

// export default PrewArrow;

import React from 'react'

const PrewArrow = (props) => {
const { className, style, onClick } = props;

  return (

<div
      className={className}
      style={{
        ...style,
        background: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}>
    </div>


   
  );
}

export default PrewArrow;
