const resultsItem = document.getElementsByClassName('programAcordeonItem');
const programBtn = document.getElementsByClassName("btn");

for (let i = 0; i < resultsItem.length; i++) {
    resultsItem[i].addEventListener("click", function() {
        const dropdown = this.querySelector('.programDropdown');
        console.log(dropdown)
        this.classList.toggle("active");
        // dropdown.classList.toggle("active");
        
        // var panel = this.nextElementSibling;
        // if (panel.style.display === "block") {
        //     panel.style.display = "none";
        // } else {
        //     panel.style.display = "block";
        // }
    });
}

