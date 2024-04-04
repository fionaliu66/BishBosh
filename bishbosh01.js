function bb(){
    for(let i =1; i<100; i++){
        if(i%3 == 0){
            if(i%4 == 0){
                console.log("Bish-Bosh " + i);
            }else{
                console.log("Bish " + i);   
            }
        }else if(i%4 == 0){
            console.log("Bosh " + i);
        }
    }
}
bb();