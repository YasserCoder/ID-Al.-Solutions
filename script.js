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
    if (showQuestion) {
        event.currentTarget.firstElementChild.classList.replace(
            "fa-plus",
            "fa-minus"
        );
        event.currentTarget.parentElement.parentElement.classList.add(
            "border",
            "lg:row-span-2"
        );
        event.currentTarget.parentElement.parentElement.classList.replace(
            "bg-slate-200",
            "border-neutral-200"
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
            "border",
            "lg:row-span-2"
        );
        event.currentTarget.parentElement.parentElement.classList.replace(
            "border-neutral-200",
            "bg-slate-200"
        );
    }
}

function handleNextBtn(event) {
    const clientOne =
        event.currentTarget.parentElement.previousElementSibling
            .firstElementChild;
    event.currentTarget.previousElementSibling.removeAttribute("disabled");
    event.currentTarget.setAttribute("disabled", "");
    clientOne.classList.replace("bg-white", "bg-slate-300");
    clientOne.classList.add("hidden", "lg:block", "bg-opacity-20");
    clientOne.nextElementSibling.classList.replace("bg-slate-300", "bg-white");
    clientOne.nextElementSibling.classList.remove(
        "hidden",
        "lg:block",
        "bg-opacity-20"
    );
}
function handlePrevBtn(event) {
    const clientOne =
        event.currentTarget.parentElement.previousElementSibling
            .firstElementChild;
    event.currentTarget.nextElementSibling.removeAttribute("disabled");
    event.currentTarget.setAttribute("disabled", "");
    clientOne.classList.replace("bg-slate-300", "bg-white");
    clientOne.classList.remove("hidden", "lg:block", "bg-opacity-20");
    clientOne.nextElementSibling.classList.replace("bg-white", "bg-slate-300");
    clientOne.nextElementSibling.classList.add(
        "hidden",
        "lg:block",
        "bg-opacity-20"
    );
}
