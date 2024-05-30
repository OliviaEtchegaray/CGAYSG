document.addEventListener('DOMContentLoaded', () => {
    const colors = ['azul', 'amarillo', 'naranja', 'violeta'];
    const manchas = [];

    // Manchs posicion
    for (let i = 0; i < 20; i++) {
        const mancha = document.createElement('div');
        mancha.classList.add('manchas', colors[Math.floor(i / 5)]);
        mancha.style.top = `${Math.random() * 60 + 5}%`; // Centrando verticalmente entre 20% y 80%
        mancha.style.left = `${Math.random() * 60 + 5}%`; // Centrando horizontalmente entre 20% y 80%
        document.body.appendChild(mancha);
        manchas.push(mancha);
    }

    
    let timeout;
    let lastMouseY = null;
    document.addEventListener('mousemove', (e) => {
        clearTimeout(timeout);
        lastMouseY = e.clientY;

        // Mostrar manchas
        manchas.forEach(mancha => {
            mancha.style.opacity = 1;
        });

        // Fodno
    const fondo = document.getElementById('fondo');
    fondo.style.transform = 'translateY(100%)'; 
      
        fondo.style.transform = 'translateY(0)';

        const height = window.innerHeight;
        const mouseY = e.clientY;
        const scrollFactor = (mouseY / height) * 2100; 
        fondo.style.transform = `translateY(-${scrollFactor}px)`;

// Aumento de las machs con el movmiento delmouse
        if (mouseY < height / 2) {
            manchas.forEach(mancha => {
                if (mancha.classList.contains('violeta') || mancha.classList.contains('azul')) {
                    mancha.style.width = '300px';
                    mancha.style.height = '500px';
                } else {
                    mancha.style.width = '100px';
                    mancha.style.height = '100px';
                }
            });
        } else {
            manchas.forEach(mancha => {
                if (mancha.classList.contains('violeta') || mancha.classList.contains('azul')) {
                    mancha.style.width = '100px';
                    mancha.style.height = '100px';
                } else {
                    mancha.style.width = '500px';
                    mancha.style.height = '300px';
                }
            });
        }
    });

 
     setInterval(() => {
        if (lastMouseY === null) {
            fondo.style.transform = 'translateY(100%)'; 
            manchas.forEach(mancha => {
                mancha.style.opacity = 0;
            });
        }
        lastMouseY = null;
    }, 1000);
});