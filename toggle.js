document.getElementById('Add-money').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('cash-out-form').style.display = 'none'
    document.getElementById('add-form').style.display = 'block'
})
document.getElementById('Cash-out').addEventListener('click', (e) => {
    e.preventDefault()

    document.getElementById('cash-out-form').style.display = 'block'
    document.getElementById('add-form').style.display = 'none'
})