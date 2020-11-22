import * as $ from 'jquery';
function analytics (): object{
	let counter = 0;
	let destroyed: boolean = false;

	const increaseCounter = (): number => counter++;
	counter = 0;
	destroyed = false;
	document.addEventListener('click', increaseCounter);

	return {
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
window['analytics'] = analytics();
