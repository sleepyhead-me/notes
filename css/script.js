script.js:

document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");
});

function performGlobalSearch() {
    let query = document.getElementById("globalSearch").value.toLowerCase();
    let sections = document.querySelectorAll("section");
    
    sections.forEach(section => {
        let items = section.querySelectorAll("li");
        items.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
        });
    });
}
