function searchItems() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    let items = document.querySelectorAll(".container img");

    items.forEach(function(img) {
        let altText = img.alt.toLowerCase();

        if (altText.includes(input)) {
            img.parentElement.style.display = "block";
        } else {
            img.parentElement.style.display = "none";
        }
    });
}