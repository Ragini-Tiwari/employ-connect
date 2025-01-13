// Array to store user data
let users = [];

// Function to switch modules
function showModule(moduleName) {
  const moduleTitle = document.getElementById("moduleTitle");
  const contentArea = document.getElementById("contentArea");

  if (moduleName === "userManagement") {
    moduleTitle.textContent = "User Management";
    renderUserManagement(contentArea);
  } else if (moduleName === "inquiryManagement") {
    moduleTitle.textContent = "Inquiry Management";
    contentArea.innerHTML = `
      <div class="card">
        <h3>Inquiry Management</h3>
        <button class="action primary" onclick="window.location.href='lead-distribution.html'">Lead Distribution</button>
        <button class="action" onclick="window.location.href='view-leads.html'">View All Leads</button>
      </div>
    `;
  } else if (moduleName === "reports") {
    moduleTitle.textContent = "Reports";
    contentArea.innerHTML = `
      <div class="card">
        <h3>Reports</h3>
        <p>Generate and view detailed reports here.</p>
        <div class="button-group">
          <button class="action primary">Generate Monthly Report</button>
          <button class="action">Download PDF</button>
          <button class="action">Export CSV</button>
        </div>
      </div>
    `;
  } else {
    contentArea.innerHTML = `<p>Select a module from the sidebar.</p>`;
  }
}

// Function to render the User Management module
function renderUserManagement(contentArea) {
  contentArea.innerHTML = `
    <div class="card">
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          ${users
            .map(
              (user, index) => `
              <tr>
                <td>${user.name}</td>
                <td>${user.role}</td>
                <td>
                  <button class="action" onclick="editUser(${index})">Edit</button>
                  
                  <button class="action delete" onclick="deleteUser(${index})">Delete</button>
                   <button class="action" onclick="progressUser(${index})">Progress</button>
                </td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
      <button class="action primary" onclick="navigateToRegistration()">+ Add Employee</button>
    </div>
  `;
}

// Function to delete a user
function deleteUser(index) {
  users.splice(index, 1);
  showModule("userManagement");
}

// Function to navigate to the registration page
function navigateToRegistration() {
  const moduleTitle = document.getElementById("moduleTitle");
  const contentArea = document.getElementById("contentArea");

  moduleTitle.textContent = "Register Employee";
  contentArea.innerHTML = `
    <div class="card">
      <h3>Register Employee</h3>
      <form id="registrationForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="role">Role:</label>
        <select id="role" name="role" required>
          <option value="" disabled selected>Select a role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>

        <button type="button" onclick="registerEmployee()">Register</button>
      </form>
    </div>
  `;
}

// Function to register a new employee
function registerEmployee() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  if (name && role) {
    users.push({ name, role }); // Add the new employee to the users array
    alert("Employee registered successfully!");
    showModule("userManagement"); // Redirect to User Management module
  } else {
    alert("Please fill in all fields.");
  }
}

// Placeholder functions for adding inquiries (if required later)
function addInquiry() {
  window.location.href = 'lead-distribution.html'; // Redirect to Lead Distribution
}
