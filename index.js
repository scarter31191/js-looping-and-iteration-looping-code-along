/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"] 

We started our counter, i, at 0 because arrays have 
zero-based indexes. Our condition states that we should run 
the code in the loop body while i is less than gifts.length 
(3 in the above example). Our iteration, i++, increments our 
counter by 1 at the end of each pass through the loop.

In our loop body, notice that we reference gifts[i]. Since i
starts out as 0, during the first pass through the 
loop gifts[i] is gifts[0] is 'teddy bear'. During the 
second pass through the loop, gifts[i] is gifts[1] is 'drone'.
And during the final pass through the loop, gifts[i] is 
gifts[2], which is 'doll'. After the third pass through 
the loop, we increment i to 3, which is no longer less than
gifts.length. Our condition evaluates to false, and we exit 
the loop.

We'll encounter for loops again when we learn about iterating
through object literals.
*/


function writeCards(names, eventName) {
    let thankYou = []
    for (let i = 0; i < names.length; i++) { 
       thankYou.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYou
}

let names = ['Steve', 'Joe', 'John']
let eventName = ['Birthday']

console.log(writeCards(names,eventName))

function countDown() {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }

}