const mainDiv = document.querySelector('.main');
const sidebarDiv = document.querySelector('.left-column')

const minWidth = 1024;
const sidebarWidth = sidebarDiv.offsetWidth;
let windowWidth = document.documentElement.clientWidth;

if(windowWidth < minWidth){
	sidebarDiv.classList.add("collapsed");
	mainDiv.classList.add("collapsed");
	mainDiv.style.width = "100%";
} else {
	sidebarDiv.classList.remove("collapsed");
	mainDiv.classList.remove("collapsed");
	mainDiv.style.width = (windowWidth - sidebarWidth) + "px";
}

mainDiv.style.width = (windowWidth - sidebarWidth) + "px";

window.addEventListener("resize", () => {
	windowWidth = document.documentElement.clientWidth;

	if(windowWidth < minWidth){
		sidebarDiv.classList.add("collapsed");
		mainDiv.classList.add("collapsed");
		mainDiv.style.width = "100%";
	} else {
		sidebarDiv.classList.remove("collapsed");
		mainDiv.classList.remove("collapsed");
		mainDiv.style.width = (windowWidth - sidebarWidth) + "px";
	}

});