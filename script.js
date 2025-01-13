// Example of interactive actions, such as changing the background color when clicked
document.addEventListener('DOMContentLoaded', () => {
    const infoBoxes = document.querySelectorAll('.info-box');
    
    infoBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = '#eef2f5';
            setTimeout(() => {
                box.style.backgroundColor = '#fff';
            }, 200);
        });
    });
});
// Mock Users
const users = [
    { username: "superadmin", password: "super123", role: "superadmin" },
    { username: "admin", password: "admin123", role: "admin" }
];

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (user) {
        window.location.href = 'registration.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid credentials or role!';
    }
});

// CRUD Operations for Registration
const userTableBody = document.querySelector('#userTable tbody');

// Add User
function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const role = document.getElementById('role').value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${role}</td>
        <td>
            <button onclick="editUser(this)">Edit</button>
            <button onclick="deleteUser(this)">Delete</button>
        </td>
    `;
    userTableBody.appendChild(row);

    document.getElementById('registrationForm').reset();
}

// Edit User
function editUser(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('email').value = cells[1].textContent;
    document.getElementById('phone').value = cells[2].textContent;
    document.getElementById('role').value = cells[3].textContent;

    row.remove();
}

// Delete User
function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
const studentTableBody = document.querySelector('#studentTable tbody');

// Add Student to the Table
function addStudent() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const location = document.getElementById('location').value;

    if (!name || !mobile || !email || !course || !location) {
        alert('All fields are required!');
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${mobile}</td>
        <td>${email}</td>
        <td>${course}</td>
        <td>${location}</td>
        <td class="actions">
            <button class="edit-btn" onclick="editStudent(this)">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    studentTableBody.appendChild(row);

    // Clear the form
    document.getElementById('studentForm').reset();
}

// Edit Student in the Table
function editStudent(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('mobile').value = cells[1].textContent;
    document.getElementById('email').value = cells[2].textContent;
    document.getElementById('course').value = cells[3].textContent;
    document.getElementById('location').value = cells[4].textContent;

    row.remove();
}

// Delete Student from the Table
function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
function logIn() {
    // Simulate redirection to the registration page
    window.location.href = 'super-admin-dashboard.html'; 
}
function addUser() {
    window.location.href = 'super-admin-dashboard.html'; 
  }
 // Function to update the calendar with the current date and time
function updateCalendar() {
    const calendar = document.getElementById('calendar');
    const now = new Date();

    // Get current date and time
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time to display leading zeros for single digit minutes and seconds
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Set the calendar content
    calendar.innerHTML = `
        <span>${day} ${month}, ${year}</span>
        <span>${formattedTime}</span>
    `;
}

// Update calendar every second
setInterval(updateCalendar, 1000);

// Initial call to display the date and time immediately on load
updateCalendar();
