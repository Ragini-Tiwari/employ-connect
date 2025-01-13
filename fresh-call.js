let callRecords = [];
let editIndex = -1;

function showAddInfo() {
    document.getElementById("addInfoForm").style.display = 'block';
    document.getElementById("infoTableContainer").style.display = 'none';
}

function cancelAddInfo() {
    document.getElementById("addInfoForm").style.display = 'none';
    document.getElementById("infoTableContainer").style.display = 'block';
}

function saveInfo() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const course = document.getElementById("course").value;
    const college = document.getElementById("college").value;
    const remarks = document.getElementById("remarks").value;

    const dateTime = new Date().toLocaleString();

    if (editIndex !== -1) {
        // Update existing record
        callRecords[editIndex] = { name, contact, course, college, remarks, dateTime };
        editIndex = -1;
    } else {
        // Add new record
        callRecords.push({ name, contact, course, college, remarks, dateTime });
    }

    updateTable();
    cancelAddInfo();
}

function updateTable() {
    const tableBody = document.getElementById("infoTableBody");
    tableBody.innerHTML = "";

    callRecords.forEach((record, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.contact}</td>
            <td>${record.course}</td>
            <td>${record.college}</td>
            <td>
                <button onclick="viewInfo(${index})">View</button>
                <button onclick="editInfo(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteInfo(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    document.getElementById("infoTableContainer").style.display = 'block';
}

function editInfo(index) {
    const record = callRecords[index];
    document.getElementById("name").value = record.name;
    document.getElementById("contact").value = record.contact;
    document.getElementById("course").value = record.course;
    document.getElementById("college").value = record.college;
    document.getElementById("remarks").value = record.remarks;

    editIndex = index;
    showAddInfo();
}

function deleteInfo(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        callRecords.splice(index, 1);
        updateTable();
    }
}

function viewInfo(index) {
    const record = callRecords[index];

    //document.getElementById("viewName").textContent = `Name: ${record.name}`;
    //document.getElementById("viewContact").textContent = `Contact: ${record.contact}`;
    //document.getElementById("viewCourse").textContent = `Course: ${record.course}`;
    //document.getElementById("viewCollege").textContent = `College: ${record.college}`;
    document.getElementById("viewRemarks").textContent = `Remarks: ${record.remarks}`;
    document.getElementById("viewDateTime").textContent = `Date/Time: ${record.dateTime}`;

    // Open modal to view the record details
    document.getElementById("viewModal").style.display = "block";
}

function closeViewModal() {
    document.getElementById("viewModal").style.display = "none";
}
