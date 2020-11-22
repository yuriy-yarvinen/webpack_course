import * as $ from 'jquery';
function analytics (){
	let counter = 0;
	let destroyed = false;

	const increaseCounter = () => {
		counter++;  
	}
		
	return {
		create(){
			counter = 0;
			destroyed = false;
			document.addEventListener('click', increaseCounter);
		},
		getCounter(){
			if(destroyed){
				return 'Analytics it destroyed';
			}
			else{
				return counter;
			}
			
		},
		destroy(){
			destroyed = true;
			document.removeEventListener('click', increaseCounter);
		}		
	}
}
window.analytics = analytics();
