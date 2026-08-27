document.addEventListener("DOMContentLoaded", () => {

    const enterBtn = document.getElementById("enter-btn");
    const welcomeScreen = document.getElementById("welcome-screen");
    const roomPage = document.getElementById("room-page");

    const room = document.getElementById("room");
    const themeBtn = document.getElementById("theme-btn");

    const modal = document.getElementById("memory-modal");
    const modalTitle = document.getElementById("memory-title");
    const modalText = document.getElementById("memory-text");
    const closeModal = document.getElementById("close-modal");

    const objects = document.querySelectorAll(".object");


    // ENTER THE ROOM
    enterBtn.addEventListener("click", () => {

        welcomeScreen.classList.add("hidden");

        roomPage.classList.remove("hidden");

    });


    // OPEN MEMORY POPUPS
    objects.forEach((object) => {

        object.addEventListener("click", () => {

            const title = object.getAttribute("data-title");
            const text = object.getAttribute("data-text");

            modalTitle.textContent = title;
            modalText.textContent = text;

            modal.classList.remove("hidden");

        });

    });


    // CLOSE POPUP BUTTON
    closeModal.addEventListener("click", () => {

        modal.classList.add("hidden");

    });


    // CLOSE POPUP WHEN CLICKING BACKGROUND
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.add("hidden");

        }

    });


    // ESCAPE KEY
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            modal.classList.add("hidden");

        }

    });


    // DAY / NIGHT MODE
    themeBtn.addEventListener("click", () => {

        room.classList.toggle("night");

        if (room.classList.contains("night")) {

            themeBtn.textContent = "☾";

        } else {

            themeBtn.textContent = "☀";

        }

    });

});