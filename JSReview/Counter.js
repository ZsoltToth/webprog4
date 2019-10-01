var cnt = 0;
var increase = () => {cnt++};
var decrease = () => {cnt--};
var counter = () =>{return cnt};

module.exports = {
    inc : increase,
    dec : decrease,
    val : counter
};