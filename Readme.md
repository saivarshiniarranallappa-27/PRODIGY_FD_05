# Social Media Platform

A full-stack social media web application built with Node.js and Express, where users can sign up, create profiles, share posts, and like/comment on each other's posts in real time.

## Features

- **User Authentication** — Signup and login with username/password
- **User Profiles** — Editable bio for each user
- **Posts / Feed** — Create text posts, view all posts in a shared feed
- **Like / Unlike** — Like or remove like from any post
- **Comments** — Comment on posts and view all comments

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript (Fetch API)
- **Storage:** JSON file-based storage (users.json, posts.json)

## Project Structure

\`\`\`
social-app/
├── server.js           # Express server + all API routes
├── package.json
└── public/
    ├── login.html       # Signup / Login page
    ├── profile.html     # User profile page
    └── feed.html        # Posts feed, like & comment
\`\`\`

## How to Run

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
2. Start the server:
   \`\`\`
   node server.js
   \`\`\`
3. Open your browser and go to:
   \`\`\`
   http://localhost:3000/login.html
   \`\`\`

## API Endpoints

| Method | Route              | Description                |
|--------|---------------------|-----------------------------|
| POST   | /signup             | Create a new account        |
| POST   | /login              | Log in to an existing account |
| POST   | /update-profile     | Update user's bio           |
| GET    | /profile/:username  | Get a user's profile        |
| POST   | /create-post        | Create a new post           |
| GET    | /posts              | Get all posts               |
| POST   | /like-post           | Like / unlike a post        |
| POST   | /add-comment         | Add a comment to a post     |

## Future Improvements

- Image / video upload support
- Post tagging
- Follow / unfollow users
- Notifications for likes, comments, and new followers
## Screenshots

### Login 
<img width="1920" height="1080" alt="Screenshot (706)" src="https://github.com/user-attachments/assets/062155d1-83db-48a9-b0bd-276e72ed6b7e" />
<img width="1920" height="1080" alt="Screenshot (707)" src="https://github.com/user-attachments/assets/a32551a1-3108-4dc8-9b96-4fef9c9bea1a" />

### Signup Page
<img width="1920" height="1080" alt="Screenshot (708)" src="https://github.com/user-attachments/assets/9e60b2cc-68d8-428c-b497-1d24abafdaa2" />
<img width="1920" height="1080" alt="Screenshot (709)" src="https://github.com/user-attachments/assets/3b54d25c-89d2-449f-92dc-f6013741c988" />

### Profile Page
<img width="1920" height="1080" alt="Screenshot (714)" src="https://github.com/user-attachments/assets/d53127dd-f797-496c-a8fa-604fbb18c248" />

### Feed Page (Posts, Like, Comment)
<img width="1920" height="1080" alt="Screenshot (716)" src="https://github.com/user-attachments/assets/28a6c4f2-c131-4730-b3c4-7fefc526d6d3" />

