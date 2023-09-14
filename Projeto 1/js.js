const panels = document.querySelectorAll('.painel')

panels.forEach(painel => {
    painel.addEventListener('click', () => {
        removeActiveclasses()
        painel.classList.add('active')
    })
})

function removeActiveclasses() {
    panels.forEach(painel => {
        painel.classList.remove('active')
    })
}