function almostIncreasingSequence(sequence) {
	let determine = true;
	let seq = sequence;
	let limiter = 0;
	
	
		for(i = 0; i < seq.length; i++){
			/*if(seq.indexOf(seq[i+2]) <= seq.length && seq.indexOf(seq[i+2]) > 0){
					console.log('simon');
					console.log(seq.indexOf(seq[i+2]));
			}else{
				console.log('nelson');
			}*/
			console.log(seq.indexOf(seq[i]));
			console.log(i);
			//console.log(limiter);
			//console.log(seq);
			
			//console.log(seq.length);

			/*if (limiter < 2 && seq[i] > seq[i+1] && seq.indexOf(seq[i]) < seq.length){
				seq.splice(seq[i], 1);
				limiter += 1;
			}/*else if(limiter < 2 && seq[i] < seq[i+2] && seq.indexOf(seq[i+2]) <= seq.length && seq.indexOf(seq[i+2]) > 0){
				seq.splice(seq[i+1], 1);
				limiter += 1;
			}else if(limiter < 2 && seq[i] > seq[i+2] && seq.indexOf(seq[i+2]) <= seq.length && seq.indexOf(seq[i+2]) > 0){
				seq.splice(seq[i+2], 1);
				limiter += 1;
			}else if(limiter > 1){
				determine = false;
			}else{
				determine = true;
			}*/
			//console.log(seq);

			
		}
		
	
	
	return determine;
}


almostIncreasingSequence([1, 3, 2]); 

//true
/*[10, 1, 2, 3, 4, 5]true*/