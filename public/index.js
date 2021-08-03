const button = document.querySelectorAll('.btn')


button.forEach(index => {
    index.addEventListener('click', e=>{
        console.log(e)
        const pY = e.pageY - e.target.offsetLeft
        const pX = e.pageX- e.target.offsetTop
        const circle = document.createElement('span')
        circle.className='rubber'
        circle.style.top = pY+ 'px'
        circle.style.left = pX + 'px'
        circle.onclick = e=>e.preventDefault()
        e.target.append(circle)
            setTimeout(() => {
                circle.remove()
            }, 800);
    })
});
