let tiles_number = 16
let total_tiles = tiles_number * tiles_number
let cont = document.querySelector(".container")


let itemClass = document.querySelectorAll("span")

let rg = document.querySelector("#bb")
let btn1 = document.querySelector(".btn")
let btn2 = document.querySelector(".c-btn")




function generateColor(){
	
	number = (Math.random() * (100-1+1)) + 1

	color = ""
	if (number < 30){
		color = "rgb(27, 153, 105)"
		return color
	}

	

	if (number>30 && number < 40){
		color = "rgb(151, 153, 27)"
		return color
	}
	if (number>40 && number < 60){
		color = "rgb(148, 53, 40)"
		return color
	}

	if (number>60 && number < 90){
		color = "rgb(27, 82, 153)"
		return color
	}

	if (number>90){
		color = "rgb(117, 27, 153)"
		return color
	}
}





function generate_grids(tiles_number,total_tiles) {
	cont.style.gridTemplateColumns = `repeat(${tiles_number},1fr)`;
	cont.style.gridTemplateRows = `repeat(${tiles_number},1fr)`;
	
	
	a = 0
	while(a<total_tiles){
		let item = document.createElement("span")
		item.classList.add("item")
		cont.appendChild(item)
		
		item.addEventListener('mouseenter',(e)=>{
			a = generateColor()
			let b = (Math.random() * (200-1+1)) + 1
			b = parseInt(b)
			let c = (Math.random() * (150-1+1)) + 1
			c = parseInt(c)
			let d = 200
			d = parseInt(d)
			console.log(b,c,d)
			e.target.style.background = `rgb(${c},${b},100)`
			e.target.style.transition = "0.3s ease"
			e.target.style.background = `rgb(${c},${b},${d})`
			e.target.style.borderColor = "transparent"
		})
		a++;
	}
	
}


btn1.addEventListener("click",(e)=>{
	console.log(rg.value)
	e.preventDefault()
	tiles_number = rg.value
	total_tiles = tiles_number * tiles_number
	generate_grids(tiles_number,total_tiles)

	btn1.style.visibility = "hidden"
	btn1.style.boxShadow = "transparent"
})



btn2.addEventListener("click",()=>{
	btn1.style.boxShadow = "0px transparent"
	while(cont.firstChild){
	btn1.style.visibility = "visible"
	cont.lastChild.remove()
	}
})

