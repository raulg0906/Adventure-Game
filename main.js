var enter = confirm("You want to go out tonight but your mom did not let you go out. will you let that stop you?")
var score = 0;
if (enter == false){
    var loser = alert("No?? Well I guess go back to your room and be a loser.")}
    if (enter == true) {
      score = 1;
        var spirit = prompt ("Thats the spirit now how will you get out? your mom is towards the front of the house watching tv but the back door is wide open. front door or back door?")
        if (spirit == "front door"){
            score = 0;
            alert("you tried sneaking out the front door. Right when you get your hand on the door knob you get hit by a chancla in the back of the head. Your mom quickly tells you to go to your room. Mission failed.") }
        if (spirit == "back door") {
            score = 3;
            var sneakout = prompt ("you head for the back door and on the way you see your moms purse. you take $10 and head out. your friends are waiting for you. you start to think if this is still a good idea. do you still go? yes or no")
                if (sneakout == "yes") {
                    score = 100;
                    var pullthrough = alert("You decide to go and you actually have a great time. When getting home, you sneak back in your room and go to sleep. Good job bud, you went out and had fun and never got caught.")
                }
                if (sneakout == "no") {
                    score = 0;
                    var wussout = alert("You decide not to go and sneak back in through the back door. As you are walking in your mom is walking by. She sees you walking back in and scolds you for leaving and grounds you for a month. You regret not staying out and you go to bed.")}
        }    
}