
const colors = ["#f68dc3", "#8df6e5", "#f6b78d", "#648afb", "#b7fb64", "#fb6464", "#e8ea74", "#a174ea"];

// Selecciona todos los contenedores de proyecto
const projectContainers = document.querySelectorAll('.project-image-container');

projectContainers.forEach(container => {
    // Cuando el mouse entra
    container.addEventListener('mouseenter', () => {
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = randomColor;

    const intervalId = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        container.style.backgroundColor = randomColor;
    }, 3000); //cada 3s se cambia el color
    

    container.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        container.style.backgroundColor = '';
        }, {once: true}); // El {once: true} hace que el event listener se elimine después de ejecutarse
    });
});