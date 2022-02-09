

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".scene").forEach(move => {

        const position = move.getAttribute('data-value');

        const x = (window.innerWidth - e.pageX * position) / 100;
        const y = (window.innerHeight - e.pageY * position) / 100;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}