let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let totelEl = document.getElementById('total-el');
let count = 0;
let totalCount = 0;


function increment(){
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save(){
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    totalCount += count;
    updateTotalCount();
    count = 0;
    countEl.textContent = count;
}

function updateTotalCount(){
    totelEl.textContent = "Total: " + totalCount;
}

function reset(){
    count = 0;
    totalCount = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous entries: "
    updateTotalCount();
}

