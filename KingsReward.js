// How much would you have after 30 days of getting paid everyday double what you got paid the day prior starting at 1 cent? 

function KingsReward(){
  var initial_amount = .01;
  var arr = [];
  for(var i = 0; i <30; i++){
    console.log("Day " + (i+1) + " pay is: " + initial_amount);
    var temp = initial_amount;
    console.log("after day " + (i+1) + " you will have $" + initial_amount + temp);
    initial_amount = initial_amount * 2;
    arr.push(initial_amount);
    
    
  }
  console.log(arr);
  
}
KingsReward();