function Calculator(){

}

Calculator.arg1 = null;
Calculator.arg2 = null;
Calculator.input = '';
Calculator.dataList = [];

Calculator.sum = function(){
    return arg1+arg2;
}
Calculator.minus = function(){
    return arg1-arg2;
}
Calculator.devide = function(){
    return arg1/arg2;
}
Calculator.times = function(){
    return arg1+arg2;
}

Calculator.calculate = function(){
    this.dataList.push(Calculator.input);
    for(data in this.dataList){
        const val = data.trim();
        switch (val) {
            case 'AC':
                break;
            case '+':
                (` ${val} `);
                break;
            case '-':
                this.addData(` ${val} `);
                break;
            case '×':
                this.addData(` ${val} `);
                break;
            case '.':
                break;
            case '=':
                this.calculate();
                break;
            case '÷':
                this.addData(` ${val} `);
                break;
            case '%':
                break;
            case '±':
                break;
            default:
                if(!arg2 && !arg1){
                    arg1 = Number(val);
                    arg2 = Number(val);
                }
                break;
            }
    }
}


Calculator.render = function(){
    let str = this.dataList.join('') + this.input;
    document.querySelector('.calculator-input-box').innerText = str;
    console.log(this.dataList);
}

Calculator.addData = function(data){
    if(Calculator.input){
        this.dataList.push(this.input);
        this.dataList.push(data);
        this.input = '';
    }
}

Calculator.click = function(e){
    const val = e.currentTarget.innerText;
    switch (val) {
        case 'AC':
            break;
        case '+':
            this.addData(` ${val} `);
            break;
        case '-':
            this.addData(` ${val} `);
            break;
        case '×':
            this.addData(` ${val} `);
            break;
        case '.':
            break;
        case '=':
            this.calculate();
            break;
        case '÷':
            this.addData(` ${val} `);
            break;
        case '%':
            break;
        case '±':
            break;
        default:
            if(this.input == '0' && val == '0') return;
            if(this.input == '0') this.input = '';
            this.input = this.input + val;
            break;
        }
        this.render();
}

window.addEventListener('load', function(){
    const keys = document.getElementsByClassName('calculator-key');
    for(let i=0; i < keys.length;i++){
       const key = keys[i];
       key.addEventListener('click', Calculator.click);
   }
});