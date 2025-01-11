from tkinter import *
from tkinter import messagebox

# Predefined users for demonstration
users = {
    "superadmin": {"password": "super123", "role": "Super Admin"},
    "admin": {"password": "admin123", "role": "Admin"}
}

# Super Admin Dashboard
def super_admin_dashboard():
    super_admin_window = Toplevel()
    super_admin_window.title("Super Admin Dashboard")
    super_admin_window.geometry("400x300")

    Label(super_admin_window, text="Super Admin Dashboard", font=("Arial", 16)).pack(pady=20)
    Label(super_admin_window, text="Welcome, Super Admin!", font=("Arial", 12)).pack(pady=10)

    # Example options for Super Admin
    Button(super_admin_window, text="Manage Users", width=20, command=lambda: messagebox.showinfo("Feature", "Manage Users Clicked")).pack(pady=10)
    Button(super_admin_window, text="View Reports", width=20, command=lambda: messagebox.showinfo("Feature", "View Reports Clicked")).pack(pady=10)

    Button(super_admin_window, text="Logout", width=20, command=super_admin_window.destroy).pack(pady=10)

# Admin Dashboard
def admin_dashboard():
    admin_window = Toplevel()
    admin_window.title("Admin Dashboard")
    admin_window.geometry("400x300")

    Label(admin_window, text="Admin Dashboard", font=("Arial", 16)).pack(pady=20)
    Label(admin_window, text="Welcome, Admin!", font=("Arial", 12)).pack(pady=10)

    # Example options for Admin
    Button(admin_window, text="Manage Inquiries", width=20, command=lambda: messagebox.showinfo("Feature", "Manage Inquiries Clicked")).pack(pady=10)
    Button(admin_window, text="Update Status", width=20, command=lambda: messagebox.showinfo("Feature", "Update Status Clicked")).pack(pady=10)

    Button(admin_window, text="Logout", width=20, command=admin_window.destroy).pack(pady=10)

# Login Functionality
def login():
    username = username_var.get()
    password = password_var.get()

    if username in users and users[username]["password"] == password:
        role = users[username]["role"]
        messagebox.showinfo("Login Successful", f"Welcome, {role}!")
        login_window.destroy()  # Close login window

        if role == "Super Admin":
            super_admin_dashboard()
        elif role == "Admin":
            admin_dashboard()
    else:
        messagebox.showerror("Login Failed", "Invalid username or password!")

# Main GUI - Login Screen
login_window = Tk()
login_window.title("Login Dashboard")
login_window.geometry("400x300")

Label(login_window, text="Login", font=("Arial", 20)).pack(pady=20)

username_var = StringVar()
password_var = StringVar()

Label(login_window, text="Username").pack(pady=5)
Entry(login_window, textvariable=username_var).pack(pady=5)

Label(login_window, text="Password").pack(pady=5)
Entry(login_window, textvariable=password_var, show="*").pack(pady=5)

Button(login_window, text="Login", command=login, width=15).pack(pady=20)

login_window.mainloop()
