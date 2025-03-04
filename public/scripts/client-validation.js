document.getElementById('blog-form').onsubmit = () => {

    clearErrors();

    let isValid = true;

    // Validate first name
    let name = document.getElementById('name').value.trim();
    if (name === "" || containsNumbers(name)) {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    // Validate last name
    let title = document.getElementById('title').value.trim();
    if (title === "") {
        document.getElementById("err-title").style.display = "block";
        isValid = false;
    }

    // Validate last name
    let content = document.getElementById('content').value.trim();
    if (content === "" || content.length < 10) {
        document.getElementById("err-content").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

function containsNumbers(str) {
    return /\d/.test(str);
}


