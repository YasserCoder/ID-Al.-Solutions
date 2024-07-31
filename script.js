let menu = document.querySelector(".menu");
function handleOpenMenu(event) {
    event.currentTarget.nextElementSibling.classList.remove("translate-x-full");
}
function handleCloseMenu(event) {
    event.currentTarget.parentElement.parentElement.classList.add(
        "translate-x-full"
    );
}

function handleShowQuestion(event) {
    const showQuestion =
        event.currentTarget.firstElementChild.classList.contains("fa-plus");
    // console.log(event.currentTarget);
    if (showQuestion) {
        event.currentTarget.firstElementChild.classList.replace(
            "fa-plus",
            "fa-minus"
        );
        event.currentTarget.parentElement.parentElement.classList.add("border");
        event.currentTarget.parentElement.parentElement.classList.replace(
            "bg-slate-200",
            "border-neutral-200"
        );
        event.currentTarget.parentElement.parentElement.classList.add(
            "lg:row-span-2"
        );
        event.currentTarget.parentElement.nextElementSibling.classList.remove(
            "hidden"
        );
    } else {
        event.currentTarget.firstElementChild.classList.replace(
            "fa-minus",
            "fa-plus"
        );
        event.currentTarget.parentElement.nextElementSibling.classList.add(
            "hidden"
        );
        event.currentTarget.parentElement.parentElement.classList.remove(
            "border"
        );
        event.currentTarget.parentElement.parentElement.classList.replace(
            "border-neutral-200",
            "bg-slate-200"
        );
        event.currentTarget.parentElement.parentElement.classList.remove(
            "lg:row-span-2"
        );
    }
}

// menu.
