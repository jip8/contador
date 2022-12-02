
const mais1$ = document.getElementById('mais1');
const mais2$ = document.getElementById('mais2');
const menos1$ = document.getElementById('menos1');
const menos2$ = document.getElementById('menos2');

const nos$ = document.getElementById('nos');
const eles$ = document.getElementById('eles');

const reset$ = document.getElementById('reset');

let nos = 0;
let eles = 0;

nos$.innerHTML = nos;
eles$.innerHTML = eles;

mais1$.addEventListener('click', function () {
    nos++;
    nos$.innerHTML = nos;
});

mais2$.addEventListener('click', function () {
    eles++;
    eles$.innerHTML = eles;
});

menos1$.addEventListener('click', function () {
    nos--;
    nos$.innerHTML = nos;
});

menos2$.addEventListener('click', function () {
    eles--;
    eles$.innerHTML = eles;
});

reset$.addEventListener('click', function () {
    nos=0;
    eles=0;
    nos$.innerHTML = nos;
    eles$.innerHTML = eles;
});