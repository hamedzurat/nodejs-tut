console.log('js is running');

const formdata = document.querySelector('form');
const inputdata = document.querySelector('input');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

formdata.addEventListener('submit',(e) => {
    e.preventDefault();

    p1.textContent = "Loading...";
    p2.textContent = "";

    fetch('http://localhost:3000/weather?address='+inputdata.value).then((res) => {
        res.json().then((data) => {
            if(data.msg){
                //console.log(data.msg);
                p1.textContent = data.msg;
            }else{
                //console.log(data.forecast);
                p1.textContent = data.location;
                p2.textContent = data.forecast;
            }
        });
    });

});

