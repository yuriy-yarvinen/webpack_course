function analytics (){
	let counter = 0;
	const increaseCounter = () => {
		counter++;  
	}
	
	document.addEventListener('click', increaseCounter);
	
	return {
		getCounter(){
			console.log(counter);
		}		
	}
}
window.analytics = analytics();

// export default analytics;