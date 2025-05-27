import zipfile
import os

project_name = "kindergarten-api"
folders = [
    "config",
    "controllers",
    "models",
    "routes",
    "middlewares",
]
files = {
    "app.js": "// Entry point",
    ".env": "PORT=3000\nMONGO_URI=mongodb://localhost:27017/kindergarten",
    "config/db.js": "// MongoDB connection setup",
    "controllers/studentController.js": "// Student logic",
    "controllers/parentController.js": "// Parent logic",
    "controllers/classroomController.js": "// Classroom logic",
    "controllers/assignmentController.js": "// Assignment logic",
    "controllers/teacherController.js": "// Teacher logic",
    "models/Student.js": "// Student schema",
    "models/Parent.js": "// Parent schema",
    "models/Teacher.js": "// Teacher schema",
    "models/Classroom.js": "// Classroom schema",
    "models/Assignment.js": "// Assignment schema",
    "routes/students.js": "// Student routes",
    "routes/parents.js": "// Parent routes",
    "routes/teachers.js": "// Teacher routes",
    "routes/classrooms.js": "// Classroom routes",
    "routes/assignments.js": "// Assignment routes",
    "middlewares/auth.js": "// Simple auth placeholder",
    "package.json": '{\n  "name": "kindergarten-api",\n  "version": "1.0.0",\n  "main": "app.js"\n}',
}

# Create the zip
zip_filename = f"{project_name}.zip"
with zipfile.ZipFile(zip_filename, 'w') as zipf:
    for folder in folders:
        folder_path = f"{project_name}/{folder}/"
        zipf.writestr(folder_path, '')  # Add folders
    for file_path, content in files.items():
        full_path = f"{project_name}/{file_path}"
        zipf.writestr(full_path, content)

print(f"{zip_filename} created successfully.")