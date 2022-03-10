window.addEventListener('load',function(){
    createDatePickerContainer();
    const datePickerList = document.getElementsByClassName('datePicker');
    for(let i=0; i < datePickerList.length;i++){
        datePickerList[i].addEventListener('click',openDatePicker);
    }
    
});

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

    let today = new Date();
    const start = today.setDate(0);

}

function createCalendar(){
    const today = new Date();
    const currnetY = today.getFullYear();
    const currnetD = today.getDate();
    const currnetM = today.getMonth();
    const startDate = new Date(currnetY, currnetM, 1);
    const endDate = new Date(currnetY, currnetM+1, 0);
    const startDay = startDate.getDay();
    
    for(let i = 0 ; )
}

createCalendar();

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
