# E-Learning Platform

This is an e-learning platform inspired by Unacademy, built using [NestJS](https://nestjs.com/), [TypeORM](https://typeorm.io/), and [JWT](https://jwt.io/) for authentication. The platform manages courses, course categories, users, and roles with proper access control.

## Features

- User registration and login with JWT authentication
- Role-based access control (admin, instructor, student)
- CRUD operations for Courses and Categories
- Assign instructors to courses
- View courses by category
- Enroll students in courses

## Entities

1. **User**: Represents the users of the platform (students, instructors, and admins). Each user has an associated role.
2. **Course**: Represents the courses available on the platform. Courses are created by instructors and can be assigned to a category.
3. **Course Category**: Represents the various categories that courses can be grouped into.
4. **Role**: Defines the access level of the user (Admin, Instructor, or Student).

## Tech Stack

- **Framework**: NestJS (Node.js)
- **Database**: TypeORM (Supports MySQL, PostgreSQL, SQLite, etc.)
- **Authentication**: JWT Token-based authentication
- **API Docs**: Swagger (Auto-generated API documentation)
  
## Requirements

- Node.js (v16 or later)
- PostgreSQL (or any other database supported by TypeORM)

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/your-username/e-learning-platform.git
cd e-learning-platform

2. Install dependencies

```bash
npm install

3. Set up environment variables
Create a .env file in the root directory and add the following configuration:

env
# Server settings
PORT=3000

# JWT settings
JWT_SECRET=your_jwt_secret

# Database settings
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name

4. Run migrations

Run the following command to generate database tables based on the TypeORM entities.
```bash
npm run typeorm migration:run

5. Run the application
```bash
npm run start:dev