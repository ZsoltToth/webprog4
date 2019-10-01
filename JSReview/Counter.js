class Counter{
    constructor(cnt_init){
        if(cnt_init === null){
            this.cnt = 0;
        }
        else {
            this.cnt = cnt_init;
        }
    }

    increase(){
        this.cnt++;
    }
    decrease(){
        this.cnt--;
    }
    value(){
        return this.cnt;
    }
}
module.exports = Counter;