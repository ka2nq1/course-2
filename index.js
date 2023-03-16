const resultsItem = document.getElementsByClassName('programAcordeonItem');

for (let i = 0; i < resultsItem.length; i++) {
    resultsItem[i].addEventListener("click", function() {
        const dropdown = this.querySelector('.programDropdown');
        console.log(dropdown)
        this.classList.toggle("active");
    });
}

