const inputEl = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsEl = document.getElementById("results-div");


checkBtn.addEventListener("click", () => {
    if (inputEl.value === "") {
        alert("Please provide a phone number");
    }
    validatePhoneNumber()
});

clearBtn.addEventListener("click", () => {
    inputEl.value = "";
    resultsEl.innerHTML = "";
})

// Validate phone number
function validatePhoneNumber() {
    const phoneNumber = inputEl.value.trim();
    const pattern = /^1?[-.● ]?(?:\([2-9][0-9]{2}\)|[2-9][0-9]{2})[-.● ]?[2-9][0-9]{2}[-.● ]?[0-9]{4}$/; // 10-digit phone number pattern

    const isValid = pattern.test(phoneNumber);
    resultsEl.textContent = isValid
        ? `Valid US number: ${phoneNumber}` // Valid phone number
        : `Invalid US number: ${phoneNumber}`

    return isValid; // Return validation status
}
