const speedLimit = 70;
//constant variable to declare the maximum speed limit without incurring a demerit point.

const points = (speed, speedLimit) = (speed - speedLimit)/5;
//function above calculates demerit points after each exceeded interval of 5kmps over speed limit

function ticketGenerator(speed){
    if(speed <= 70){
        console.log("OK");
    }
//responds "OK" if speed limit is 70 and below    
    let points = 12;
    while (points > 0){
        console.log("Points:", i);
        i++;
    }
//indicated points for each exceeded interval    
    if (points >= 12){
        console.log("License revoked!")
    }
}
