document.querySelector(`body`).style.perspective = `500px`
const card = document.querySelectorAll(`div`)
card.forEach(({ dataset }, index) => {
    if (dataset.card === ``) {
        const inner = card[index].querySelector(`div`)
        const radiance = document.createElement(`div`)
        const target = card[index]
        inner.style.display = `flex`
        inner.style.height = `100%`
        inner.style.position = `absolute`
        inner.style.transform = `translateZ(20px)`
        inner.style.width = `100%`
        radiance.style.height = `100%`
        radiance.style.left = `0`
        radiance.style.opacity = `0`
        radiance.style.position = `absolute`
        radiance.style.top = `0`
        radiance.style.transition = `1s`
        radiance.style.width = `100%`
        target.appendChild(radiance)
        target.style.position = `relative`
        target.style.transform = `perspective(1000px)`
        target.style.transformStyle = `preserve-3d`
        target.addEventListener(`mousemove`, ({ pageX, pageY }) => {
            const x = pageX
            const y = pageY
            const targetCoords = target.getBoundingClientRect()
            const targetX = targetCoords.left + (target.offsetWidth / 2)
            const targetY = targetCoords.top + (target.offsetHeight / 2)
            const angleX = (targetY - y) / -25
            const angleY = (targetX - x) / 25
            radiance.style.background = `linear-gradient(${x}deg, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0.5) 100%)`
            radiance.style.opacity = `${y / 1000}`
            target.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
            target.style.transition = `100ms`
        })
        target.addEventListener(`mouseout`, () => {
            radiance.style.background = `none`
            radiance.style.opacity = `0`
            target.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
            target.style.transition = `500ms`
        })
    }
});

