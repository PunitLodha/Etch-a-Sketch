const container=document.querySelector(".container");
	
for(let i=0;i<16*16;i++)
{
	let div =document.createElement("div");
	div.style.borderBottom="1px solid black";
	div.style.borderRight="1px solid black";
	container.appendChild(div);
}

    
container.addEventListener("mouseover",color);

function color(e)
{
	if(!e.target.classList.contains("container"))
  {
		e.target.style.backgroundColor="blue"
		console.log(e.target);
  }

}