const colors = ['green', 'red', 'rgb(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // pega um número aleatório entre 0 e 3
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

// gera o número aleatório do comprimento de colors (entre 0 e 3)
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length) // para números reais com mais de 2 casas decimais Math.floor mostrará apenas primeira cas
}