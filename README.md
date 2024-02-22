# Node.js Complete Guide's Contents

เลือก Branch ตาม content ที่ต้องการ

- [Node.js Complete Guide's Contents](#nodejs-complete-guides-contents)
  - [Basics](#basics)
    - [1. Routing Requests](#1-routing-requests)
    - [2. Parsing Request Bodies](#2-parsing-request-bodies)
    - [3. Blocking and Non-blocking Code](#3-blocking-and-non-blocking-code)
    - [4. Using the Node Modules System](#4-using-the-node-modules-system)
  - [Development Workflow and Debugging](#development-workflow-and-debugging)
    - [5. Understanding NPM Scripts](#5-understanding-npm-scripts)
      - [Global Features vs Core Modules vs Third-Party Modules](#global-features-vs-core-modules-vs-third-party-modules)

## Basics

Node.js runtime and global modules

### 1. Routing Requests

จัดการ route ด้วย `req.url` และจบด้วย `res.end()`

### 2. Parsing Request Bodies

จะเป็นอย่างไรเมื่อ ส่ง request ถี่ๆ แก้ได้ด้วย `Buffer`

### 3. Blocking and Non-blocking Code

ปรับการทำงานของ Blocking IO ด้วยการใช้ `writeFile()` ทดแทน `writeFileSync()`

### 4. Using the Node Modules System

การทำงานของ `module.exports` 

## Development Workflow and Debugging

เมื่อการ start server ด้วยการรัน `node app.js` ไม่ค่อย work อาจจะต้องพึ่งพาวิธีการอื่น

### 5. Understanding NPM Scripts

รู้จักตัวจัดการ node packages ที่เรียกว่า NPM
เริ่มสร้าง ด้วยการรัน `npm init`

สร้าง script name ด้วย `start` สามารถรันด้วย `npm start` ได้ (special script name)
ส่วนชื่ออื่นต้องรันด้วย `npm run <script_name>`

option install --> `--save`: production, `--save-dev`: development

#### Global Features vs Core Modules vs Third-Party Modules

- `Global features`: Keywords like const or function but also some global objects like process

- `Core Node.js Modules`: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

- `Third-party Modules`: Installed via npm install - you can add any kind of feature to your app via this way