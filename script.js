(function (){
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0

    // Add event listeners to each button
    buttons.forEach(function(button){
        button.addEventListener('click', function() {
            if(button.classList.contains('prevBtn')) {
                count --
            } else if (button.classList.contains('nextBtn')) {
                count ++
            }

            const counter = document.querySelector('#counter')
            counter.textContent = count

            // This checks if the visible number is + or - then applies a colour style using css
            if (count < 0) {
                counter.style.color = 'red'
            } else if (count > 0) {
                counter.style.color = 'blue'
            } else {
                counter.style.color = '#333333'
            }

        })
    })

})()