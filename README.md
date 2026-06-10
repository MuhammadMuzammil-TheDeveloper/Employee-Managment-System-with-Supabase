# 👨‍💼 Employee Management System (CRUD + Supabase)

A simple and modern **Employee Management System** built using **HTML, Bootstrap, JavaScript, and Supabase**.  
This project demonstrates full **CRUD operations** with a real-time cloud database.

---

## 🚀 Features

- ➕ Add new employees
- 📋 View all employees in a table
- ✏️ Update employee data
- ❌ Delete single employee
- 🗑️ Delete all employees
- ☁️ Cloud database using Supabase
- 📱 Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6)
- Supabase (Backend as a Service)

---

## 🗄️ Database Setup (Supabase)

Create a table in Supabase:

```sql
create table employees (
  id bigint generated always as identity primary key,
  name text,
  email text,
  department text,
  salary numeric,
  created_at timestamp default now()
);
