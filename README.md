# Community App – Front-End Assessment (UI Only)

## Project Overview
Community App is a front-end only social feed application developed as part of a Front-End Intern Assessment.  
The application simulates a basic community / social media experience where users can view posts, create posts, interact with content, and view a user profile using mock data only.

No backend services, authentication, or database connections are implemented in this project.

---

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Context API for state management
- React Icons
- Mock / static JSON data

---

## Features Implemented
- Home Feed page displaying posts with user name, avatar, content, likes, and comments count
- Create Post UI to add new posts using front-end state (mock only)
- Like and comment interactions handled using React state
- User Profile page with profile picture, user information, and user-created posts
- Responsive navigation bar for switching between pages
- Modern glassmorphism UI with consistent colors, spacing, and typography
- Fully responsive design for mobile, tablet, and desktop screens

---

## Project Setup

### Clone the repository
```bash
git clone <https://github.com/Rashmitharaka1/Community-App>
````
### Navigate to the project folder
````
cd community-app
````

### Install dependencies
````
npm install
````

### Run the project
````
npm run dev
````
---

## Folder Structure
```text
src/
 ├─ assets/        # Images 
 ├─ components/    # Reusable UI components
 ├─ pages/         # Application pages
 ├─ context/       # Global state management
 ├─ data/          # Mock data
 ├─ App.jsx
 └─ main.jsx
```
---

### Assumptions

- This is a front-end only implementation
- All data is mocked and stored in front-end state
- No backend APIs or authentication logic are used

