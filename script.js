document.getElementById('login').addEventListener('click',(event) => {
    event.preventDefault()
    const n = 123456789
    const p = 1234

    const phn = document.getElementById('mobile-number').value
    const phone = parseInt(phn)
    const pin = document.getElementById('pin').value
    const pinNumber = parseInt(pin)

    if(phone === n && pinNumber === p){
        window.location.href = '/home.html'
    }
    else{
        alert("Invalid Phone or Pin")
    }

})