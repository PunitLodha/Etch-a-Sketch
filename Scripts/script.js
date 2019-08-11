const container=document.querySelector(".container");
const eraser=document.querySelector(".eraser");
const draw=document.querySelector(".draw");

let color="blue";
	
for(let i=0;i<16*16;i++)
{
	let div =document.createElement("div");
	div.style.borderBottom="1px solid black";
	div.style.borderRight="1px solid black";
	container.appendChild(div);
}

    
container.addEventListener("mouseover",colorTheGrid);
eraser.addEventListener("click",()=>{color="rgb(238, 232, 232)"});
draw.addEventListener("click",()=>{color="blue"});

function colorTheGrid(e)
{
	if(!e.target.classList.contains("container"))
  {
		e.target.style.backgroundColor=color;
  }

}