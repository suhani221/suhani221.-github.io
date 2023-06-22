/* -- Glow effect -- */

// const blob = document.getElementById("blob");

// window.onpointermove = event => { 
//   const { clientX, clientY } = event;
  
//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 3000, fill: "forwards" });
// }


// const appleSection = document.querySelector(".section");
const blob = document.querySelector("#blob");
const appleSection = document.querySelector(".section");

appleSection.onpointermove = event => { 
  const { clientX, clientY } = event;
  //Check if pointer event is within navbar's boundaries
      
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}