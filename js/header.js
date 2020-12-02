let hamicon = document.getElementById('hamicon');

hamicon.addEventListener('click', () => {
    document.querySelectorAll('.icon-line').forEach(e => {
        e.classList.toggle('icon-open')
    });
    document.getElementById('nav').classList.toggle('nav-ham');
});

// const nav_items = document.querySelectorAll(".nav > ul > li > a");