# First Deployed Application 🚀

A sleek, **Neumorphic Apple-styled** web application built with Node.js and Express.js. [cite_start]This project was developed as part of **Assignment No. 10: Website Hosting** to demonstrate the study and implementation of web application deployment[cite: 1, 3].

## 🍏 Design Philosophy
This application features a modern UI inspired by Apple's design language, utilizing **Standard CSS** to achieve a soft, extruded Neumorphic look. 
* **Soft Shadows:** Uses layered `box-shadow` for depth.
* **Clean Typography:** System-default sans-serif fonts for a native feel.
* **Responsive Card:** A centered dashboard layout that displays the deployment status.

## 🛠️ Features & Routes
[cite_start]The server is configured to handle the following endpoints as per the assignment requirements[cite: 15, 24]:

- [cite_start]**`GET /`**: Serves the main Neumorphic UI with the "Application Deployed Successfully" message[cite: 17].
- [cite_start]**`GET /status`**: Returns a JSON object indicating the system is `running` and identifies the environment (development/production)[cite: 18].
- [cite_start]**`GET /info`**: Provides application metadata including name, version, and author details[cite: 25].
- [cite_start]**404 Handling**: Custom error handling for any invalid routes[cite: 26].
- [cite_start]**Logging**: Integrated middleware to track incoming requests in the server console[cite: 27].

## 🚀 Deployment Info
[cite_start]This application is deployed on **Render**[cite: 20].
* [cite_start]**Environment Variables:** Utilizes `process.env.PORT` for dynamic port binding[cite: 19].
* **Start Command:** `npm start` (Runs `node index.js`).
* [cite_start]**CI/CD:** Automated deployment via GitHub integration[cite: 8].

## 📂 Project Structure
```text
.
├── public/
│   └── index.html    # Neumorphic UI (Standard CSS)
├── index.js          # Express server & Routes
├── package.json      # Dependencies & Scripts
└── .gitignore        # Excludes node_modules
