

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".scene").forEach(move => {

        const position = move.getAttribute('data-value');

        const x = (window.innerWidth - e.pageX * position) / 150;
        const y = (window.innerHeight - e.pageY * position) / 150;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}