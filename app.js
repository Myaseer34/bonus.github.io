// Grabbing elements
const blob = document.getElementById("blob");

// Adding mouse move event listener
window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  // adding position of blob to the position of mouse x,y
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
}
