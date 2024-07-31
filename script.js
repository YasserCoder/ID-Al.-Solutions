let menu = document.querySelector(".menu");
function handleOpenMenu(event) {
    event.target.parentElement.nextElementSibling.classList.remove(
        "translate-x-full"
    );
}
function handleCloseMenu(event) {
    event.target.parentElement.parentElement.parentElement.classList.add(
        "translate-x-full"
    );
}

// menu.nextElementSibling.classList.
