const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {

    console.log(button)
    button.addEventListener('click', function (event) {
        console.log(event) 
        console.log(event.target)
        switch(event.target)
        {
            case(grey): body.style.backgroundColor=event.target.id
            case(blue): body.style.backgroundColor=event.target.id
            case(white): body.style.backgroundColor=event.target.id
            case(yellow): body.style.backgroundColor=event.target.id
            case(purple): body.style.backgroundColor=event.target.id
        }
    })
}) 