const board = document.querySelector(".board")
for (let i = 0; i < 8; i++) {
    board.innerHTML += `
    <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
    </div>
    `
}