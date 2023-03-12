document.getElementById('amount').addEventListener('click', (e) => {
    const amount100 = document.getElementById('100');
    const amount200 = document.getElementById('200');
    const amount500 = document.getElementById('500');
    const amount1000 = document.getElementById('1000');
    const amount5000 = document.getElementById('5000');
    if (e.target.innerText === '100TK') {
        amount100.setAttribute('class', 'active');
        amount200.removeAttribute('class');
        amount500.removeAttribute('class');
        amount1000.removeAttribute('class');
        amount5000.removeAttribute('class');
    }else if (e.target.innerText === '200TK') {
        amount200.setAttribute('class', 'active')
        amount100.removeAttribute('class');
        amount500.removeAttribute('class');
        amount1000.removeAttribute('class');
        amount5000.removeAttribute('class');
    }else if (e.target.innerText === '500TK') {
        amount500.setAttribute('class', 'active')
        amount200.removeAttribute('class');
        amount100.removeAttribute('class');
        amount1000.removeAttribute('class');
        amount5000.removeAttribute('class');
    }else if (e.target.innerText === '1000TK') {
        amount1000.setAttribute('class', 'active')
        amount200.removeAttribute('class');
        amount500.removeAttribute('class');
        amount100.removeAttribute('class');
        amount5000.removeAttribute('class');
    }else if (e.target.innerText === '5000TK') {
        amount5000.setAttribute('class', 'active');
        amount200.removeAttribute('class');
        amount500.removeAttribute('class');
        amount1000.removeAttribute('class');
        amount1000.removeAttribute('class');
    }
    // switch (e.target.innerText) {
    //     case '100TK':
    //         amount100.setAttribute('class', 'active')
    //         break;
    //     case '200TK':
    //         amount200.setAttribute('class', 'active')
    //         break;
    //     case '500TK':
    //         amount500.setAttribute('class', 'active')
    //         break;
    //     case '1000TK':
    //         amount1000.setAttribute('class', 'active')
    //         break;
    //     case '5000TK':
    //         amount5000.setAttribute('class', 'active')
    //         break;
    
    //     default:
    //         break;
    // }
})