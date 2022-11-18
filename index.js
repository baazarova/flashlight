let flash = document.querySelectorAll('.flash');
let count = 0;

setInterval(() => {
    flash.innerHTML = '';
    if(count <= 2){
        flash[2].style.backgroundColor = '';
        flash[0].style.backgroundColor = 'red';

    }
    else if(count > 2 && count <= 4){
        flash[0].style.backgroundColor = '';
        flash[1].style.backgroundColor = 'yellow';

    }
    else if(count > 4 && count < 6){
        flash[1].style.backgroundColor = '';
        flash[2].style.backgroundColor = 'green';
    }
    if(count == 6){
        count = 0;
    }
   count += 1;


}, 1000);