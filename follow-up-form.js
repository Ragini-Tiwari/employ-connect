// Load data from URL parameters and prefill form
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const remarks = params.get("remarks");
    const callerName = params.get("callerName");

    // Prefill the form fields with lead details if available
    if (remarks) document.getElementById("remarks").value = remarks;
    if (callerName) document.getElementById("callerName").value = callerName;
});

// Function to handle form submission
function addFollowUp() {
    const followUpRequired = document.querySelector('input[name="followUp"]:checked')?.value;
    const interested = document.getElementById("interested").value;
    const remarks = document.getElementById("remarks").value;
    const reminderDate = document.getElementById("reminderDate").value;
    const callerName = document.getElementById("callerName").value;

    if (!followUpRequired || !interested || !remarks || !reminderDate || !callerName) {
        alert("Please fill in all required fields!");
        return;
    }

    // Save the data (replace this with an API call or other logic)
    console.log({
        followUpRequired,
        interested,
        remarks,
        reminderDate,
        callerName,
    });

    alert("Follow-up successfully submitted!");
    // Redirect back to Call Information page
    window.location.href = "fresh-call.html";
}


