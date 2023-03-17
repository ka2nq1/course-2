const resultsItem = document.getElementsByClassName('programAcordeonItem');
const questionsItem = document.getElementsByClassName('questionsItem');

for (let i = 0; i < resultsItem.length; i++) {
    resultsItem[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });

    console.log(resultsItem.filter((e, index) => index !== i))
}

for (let i = 0; i < questionsItem.length; i++) {
    questionsItem[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

