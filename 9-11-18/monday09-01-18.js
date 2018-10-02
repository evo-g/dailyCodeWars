function countBarks(str) {
    var barkCounter = 0;
    var rightCounter = 0;

    // var strBreak = str.split('');
    // console.log('strbreak', strBreak)

    for(let i = 0; i < str.length; i++){
        console.log('index', str[i])
        if(str[i] === '>') {
            rightCounter+= 1;
            console.log('right', rightCounter)
        } else if(str[i] === '<') {
            barkCounter += rightCounter * 2;
            console.log('bark', barkCounter)
        }

    }
    console.log('total', barkCounter)
} 

// countBarks('<-<-<-<')
 countBarks('<-<-<->-<-<-<') 
//   countBarks('<-<-<->-<->-<-<-<')
