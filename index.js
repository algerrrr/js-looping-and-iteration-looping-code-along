// Code your solutions in this file
const names = []
var thankMsg = []

function writeCards( receiver , greeting ) {
    // console.log(receiver.length)
    for (let i=0; i<receiver.length; i++) {
     thankMsg.push(`Thank you, ${receiver[i]}, for the wonderful ${greeting} gift!`)
     
    } 

     return thankMsg
}
writeCards(names, 'surprise')

function countDown(number) {
    for (let i = number; i>-1; i--)
        console.log(i)

}
countDown(10)
