import sqlite3
from tkinter import *
from tkinter import ttk
from tkinter import messagebox
from datetime import datetime

# Database setup
def setup_database():
    conn = sqlite3.connect("enquiry_system.db")
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS inquiries (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'New',
            date_created TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Add Inquiry
def add_inquiry():
    name = name_var.get()
    email = email_var.get()
    message = message_var.get("1.0", END).strip()

    if not name or not email or not message:
        messagebox.showerror("Error", "All fields are required!")
        return

    conn = sqlite3.connect("enquiry_system.db")
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO inquiries (name, email, message, date_created)
        VALUES (?, ?, ?, ?)
    ''', (name, email, message, datetime.now()))
    conn.commit()
    conn.close()

    messagebox.showinfo("Success", "Inquiry added successfully!")
    name_var.set("")
    email_var.set("")
    message_var.delete("1.0", END)
    view_inquiries()

# View Inquiries
def view_inquiries():
    for row in tree.get_children():
        tree.delete(row)

    conn = sqlite3.connect("enquiry_system.db")
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM inquiries')
    rows = cursor.fetchall()
    conn.close()

    for row in rows:
        tree.insert("", "end", values=row)

# Update Status
def update_status():
    selected_item = tree.focus()
    if not selected_item:
        messagebox.showerror("Error", "Please select an inquiry to update!")
        return

    item = tree.item(selected_item)
    inquiry_id = item["values"][0]
    new_status = status_var.get()

    conn = sqlite3.connect("enquiry_system.db")
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE inquiries
        SET status = ?
        WHERE id = ?
    ''', (new_status, inquiry_id))
    conn.commit()
    conn.close()

    messagebox.showinfo("Success", "Inquiry status updated!")
    view_inquiries()

# Main GUI
setup_database()
root = Tk()
root.title("Inquiry Management System")
root.geometry("800x600")

# Frames
top_frame = Frame(root)
top_frame.pack(pady=10)

middle_frame = Frame(root)
middle_frame.pack(pady=10)

bottom_frame = Frame(root)
bottom_frame.pack(pady=10)

# Add Inquiry Section
Label(top_frame, text="Add New Inquiry", font=("Arial", 16)).grid(row=0, columnspan=2, pady=10)

name_var = StringVar()
email_var = StringVar()
Label(top_frame, text="Name:").grid(row=1, column=0, sticky=W, padx=10)
Entry(top_frame, textvariable=name_var, width=30).grid(row=1, column=1, padx=10)

Label(top_frame, text="Email:").grid(row=2, column=0, sticky=W, padx=10)
Entry(top_frame, textvariable=email_var, width=30).grid(row=2, column=1, padx=10)

Label(top_frame, text="Message:").grid(row=3, column=0, sticky=NW, padx=10)
message_var = Text(top_frame, width=40, height=5)
message_var.grid(row=3, column=1, padx=10)

Button(top_frame, text="Add Inquiry", command=add_inquiry).grid(row=4, columnspan=2, pady=10)

# View Inquiries Section
Label(middle_frame, text="All Inquiries", font=("Arial", 16)).grid(row=0, columnspan=2, pady=10)

columns = ("ID", "Name", "Email", "Message", "Status", "Date Created")
tree = ttk.Treeview(middle_frame, columns=columns, show="headings", height=10)
for col in columns:
    tree.heading(col, text=col)
    tree.column(col, width=100 if col == "ID" else 150)

tree.grid(row=1, column=0, columnspan=2, padx=10)

Button(middle_frame, text="Refresh", command=view_inquiries).grid(row=2, columnspan=2, pady=10)

# Update Status Section
Label(bottom_frame, text="Update Inquiry Status", font=("Arial", 16)).grid(row=0, columnspan=2, pady=10)

status_var = StringVar()
Label(bottom_frame, text="New Status:").grid(row=1, column=0, padx=10)
ttk.Combobox(bottom_frame, textvariable=status_var, values=["New", "In Progress", "Resolved"], width=20).grid(row=1, column=1, padx=10)

Button(bottom_frame, text="Update Status", command=update_status).grid(row=2, columnspan=2, pady=10)

# Initialize
view_inquiries()
root.mainloop()
