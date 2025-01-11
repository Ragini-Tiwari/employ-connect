// Sample data for calls
const calls = [
    {
      name: "John Doe",
      course: "Computer Science",
      phone: "123-456-7890",
      remarks: "Interested in the course. Needs follow-up.",
    },
    {
      name: "Jane Smith",
      course: "Data Science",
      phone: "987-654-3210",
      remarks: "Asked about scholarship details.",
    },
  ];
  
  // Function to populate the calls table
  function populateCallsTable() {
    const tableBody = document.querySelector("#callsTable tbody");
    tableBody.innerHTML = "";
  
    calls.forEach((call, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${call.name}</td>
        <td>${call.course}</td>
        <td>${call.phone}</td>
        <td>
          <button onclick="viewLead(${index})">View</button>
          <button onclick="updateLead(${index})">Update</button>
        </td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Function to open a modal
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Function to close a modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Function to view lead details
  function viewLead(index) {
    const lead = calls[index];
    document.getElementById("viewName").textContent = lead.name;
    document.getElementById("viewCourse").textContent = lead.course;
    document.getElementById("viewPhone").textContent = lead.phone;
    document.getElementById("viewRemarks").textContent = lead.remarks;
  
    openModal("viewModal");
  }
  
  // Function to update lead remarks
  function updateLead(index) {
    const lead = calls[index];
    document.getElementById("updateName").textContent = lead.name;
    document.getElementById("updateRemarks").value = lead.remarks;
  
    // Save the index of the current lead for updates
    document.getElementById("updateModal").dataset.currentIndex = index;
    openModal("updateModal");
  }
  
  // Redirect to Follow-Up Form when "Update" is clicked
  function redirectToFollowUp() {
    const name = document.getElementById("updateName").textContent;
  
    // Redirect to follow-up form page, passing the name as a query parameter
    const url = `follow-up-form.html?name=${encodeURIComponent(name)}`;
    window.location.href = url;
  }
  
  // Populate the table when the page loads
  document.addEventListener("DOMContentLoaded", populateCallsTable);

  function redirectToFollowUp() {
    const name = document.getElementById("updateName").textContent;
  
    // Redirect to follow-up form page, passing the name as a query parameter
    const url = `follow-up-form.html?name=${encodeURIComponent(name)}`;
    window.location.href = url;
  }