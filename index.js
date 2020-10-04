function almostIncreasingSequence(sequence) {
	let determine;
	let seq = sequence;
	let limiter = 0;
	//let random = Math.floor(Math.random()*seq.length);
	//seq.splice(random, 1);
	//console.log(random);
	//console.log(seq);
	
	while(limiter < 2){
		for(i = 0; i < seq.length; i++){
			if (seq[i+1] >= seq[i] && seq[i+2] <= seq[i+1] && seq[i] < seq.length && seq[i] < seq.length){
				seq.splice(seq[i+1], 1);
				limiter += 1;
				console.log(limiter);
				console.log(seq);
				//determine = true;
			}/*else{
				determine = false;
			}*/
		}
	}
	if(limiter === 1){
		determine = true;
	}else{
		determine = false;
	}
	
	return determine;
}


almostIncreasingSequence([1, 3, 2]); 
//true
/*[10, 1, 2, 3, 4, 5]true*/