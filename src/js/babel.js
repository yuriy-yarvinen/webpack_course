async function test(){
	return await Promise.resolve('async is working');
}

test().then(console.log);


class Util {
	static id = Date.now()
}

const testConts = 12;

console.log('Util Id:', Util.id);