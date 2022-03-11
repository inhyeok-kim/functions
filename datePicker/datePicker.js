window.addEventListener('load',function(){
    createDatePickerContainer();
    const datePickerList = document.getElementsByClassName('datePicker');
    for(let i=0; i < datePickerList.length;i++){
        datePickerList[i].addEventListener('click',openDatePicker);
    }
    
});

let today = new Date();
let currnetY = today.getFullYear();
let currnetD = today.getDate();
let currnetM = today.getMonth();

function openDatePicker(e){
    console.log(e);
}

function createDatePickerContainer(){
    const dpc = document.createElement('div');
    document.body.append(dpc);
    dpc.id="datePickerContainer";
    dpc.style.position = 'absolute';
    dpc.style.width = '300px';
    dpc.style.height = '400px';
    dpc.style.boxSizing = 'border-box';
    dpc.style.border = '1px solid black';
    dpc.style.display = 'flex';
    dpc.style.flexWrap = 'wrap';
    let today = new Date();
    const start = today.setDate(0);

    createCalendar();
}

function createCalendar(){
    const dpc = document.getElementById('datePickerContainer');
    dpc.innerHTML = '';

    const startDate = new Date(currnetY, currnetM, 1);
    const endDate = new Date(currnetY, currnetM+1, 0);
    const startDay = startDate.getDay();
    const endDay = endDate.getDay();

    const rowCnt = (startDay + endDate.getDate() + (6-endDay)) / 7;


    const ctrl = document.createElement('div');
    ctrl.style.width = '100%';
    ctrl.style.height = '10%';
    dpc.append(ctrl);

    const prevM = document.createElement('button');
    prevM.innerText = '이전달';
    prevM.onclick = prevMonth;
    ctrl.append(prevM);

    const yearMonth = document.createElement('span');
    yearMonth.innerText = `${currnetY}년 ${currnetM+1}월`;
    ctrl.append(yearMonth);

    const goTodayBtn = document.createElement('a');
    goTodayBtn.innerText = '오늘';
    goTodayBtn.href = 'javascript:goToday()';
    ctrl.append(goTodayBtn);

    const nextM = document.createElement('button');
    nextM.innerText = '다음달';
    nextM.onclick = nextMonth;
    ctrl.append(nextM);

    const calc = document.createElement('div');
    calc.style.width = '100%';
    calc.style.height = '90%';
    calc.style.display = 'flex';
    calc.style.flexWrap = 'wrap';
    calc.id = "datePickerCalendarContainer";
    dpc.append(calc);

    for(let i = 0 ; i < 7; i++){
        const div = document.createElement('div');
        div.className = 'day';
        div.style.width = 'calc(100% / 7)';
        div.style.height = 'calc(10%)';
        div.innerText = transDayToKor(i);
        div.style.boxSizing = 'border-box';
        div.style.border = '1px solid black';
        div.style.textAlign = 'center';
        calc.append(div);
    }
    for(let i = 0 ; i < startDay; i++){
        const div = document.createElement('div');
        div.className = 'blank-date';
        div.style.width = 'calc(100% / 7)';
        div.style.height = 'calc(90% / '+rowCnt+')';
        div.style.boxSizing = 'border-box';
        div.style.border = '1px solid black';
        calc.append(div);
    }
    for(let i = startDate.getDate() ; i <= endDate.getDate(); i++){
        const div = document.createElement('div');
        div.className = 'date';
        div.innerText = i;
        div.style.width = 'calc(100% / 7)';
        div.style.height = 'calc(90% / '+rowCnt+')';
        div.style.boxSizing = 'border-box';
        div.style.border = '1px solid black';
        calc.append(div);
    }
    for(let i = 0 ; i < 6 - endDay; i++){
        const div = document.createElement('div');
        div.className = 'blank-date';
        div.style.width = 'calc(100% / 7)';
        div.style.height = 'calc(90% / '+rowCnt+')';
        div.style.boxSizing = 'border-box';
        div.style.border = '1px solid black';
        calc.append(div);
    }
}

function transDayToKor(day){
    switch (day) {
        case 0:
            return '일';
            case 1:
            return '월';
        case 2:
            return '화';
        case 3:
            return '수';
        case 4:
            return '목';
        case 5:
            return '금';
        case 6:
            return '토';
    }
}

function prevMonth(){
    const nextDate = new Date(currnetY, currnetM-1, currnetD);
    setCurrentDate(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate());
    createCalendar();
}

function nextMonth(){
    const nextDate = new Date(currnetY, currnetM+1, currnetD);
    setCurrentDate(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate());
    createCalendar();
}

function goToday(){
    const nextDate = new Date();
    setCurrentDate(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate());
    createCalendar();
}

function setCurrentDate(year, month, date){
    today = new Date();
    currnetD = date;
    currnetM = month;
    currnetY = year;
}
