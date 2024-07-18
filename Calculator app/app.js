(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let delet = document.querySelector('.delete');
    
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.value;
            screen.value += value;
        })
    })
    
    
    equal.addEventListener('click', (e) => {
        if(screen.value === ''){
            screen.value = '';
        } else {
            screen.value = eval(screen.value);
        }
    })
    
    clear.addEventListener('click', (e) => {
        screen.value = "";
    })
    
    delet.addEventListener('click', (e) => {
        screen.value = screen.value.toString().slice(0, -1)
    })
    
    })();