function countSheep(myNum) {

    if (myNum < 1) {
        console.log('All sheep jumped over the fence')
        return
    } 

    console.log(myNum + 'Another sheep jumps over the fence')

    myNum --
    
    countSheep(myNum)
}

  countSheep(3)