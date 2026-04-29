const API_URL = "http://127.0.0.1:5000/parking"; // change when deployed

// Load parking data
function loadData() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById("grid");
            const freeCount = document.getElementById("free-count");

            grid.innerHTML = "";

            let freeSpaces = 0;

            data.forEach((slot, index) => {
                const div = document.createElement("div");
                div.classList.add("slot");

                if (slot.status === "Empty") {
                    div.classList.add("empty");
                    div.innerText = "Empty";
                    freeSpaces++;
                } else {
                    div.classList.add("occupied");
                    div.innerText = "Full";
                }

                grid.appendChild(div);
            });

            freeCount.innerText = `Available: ${freeSpaces} / ${data.length}`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Auto load on page open
window.onload = loadData;

// Auto refresh every 5 seconds
setInterval(loadData, 5000);
