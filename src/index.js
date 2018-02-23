module.exports = function getZerosCount(number) {
    let rezult = 0;

    while( number >= 5 ){
        number = Math.floor( number / 5 );
        rezult += number;
    }
    
    return rezult;
}