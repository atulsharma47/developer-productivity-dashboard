# 🚀 Developer Productivity Dashboard

Track developer performance, identify risks, and generate actionable insights using engineering data.

---

## 🎯 Problem

Engineering teams often lack clear visibility into:

* Developer productivity
* Code quality trends
* Delivery speed

This makes it hard to identify risks early and improve performance.

---

## 💡 Solution

This dashboard analyzes engineering data (Jira issues, deployments, pull requests, and bugs) to:

* Measure developer performance
* Detect risky developers
* Provide actionable insights
* Enable data-driven decisions

---

## ✨ Features

* 📊 **Metrics Overview**

  * Cycle Time
  * Lead Time
  * Pull Requests
  * Deployments
  * Bug Rate

* ⚠️ **Risk Detection**

  * Identifies high-risk developers based on bug rate

* 🧠 **Smart Insights**

  * Detects trends (increase/decrease in metrics)
  * Provides actionable suggestions

* 🔄 **Month-over-Month Comparison**

  * Tracks improvement or degradation

* 👥 **Manager Summary**

  * Team averages
  * Risky developer identification

---

## 📸 Screenshots

### Dashboard View

![Dashboard](./screenshots/dashboard.png)

### Insights Section

![Insights](./screenshots/insights.png)

---

## 🧠 System Design (Miro Board)

View the system flow and user journey here:
👉 [Miro Board Link](https://miro.com/app/board/uXjVHaJKq2s=/?share_link_id=687978719019)

---

## 🎥 Demo Video

Watch the complete demo here:
👉 [Demo Video Link](https://drive.google.com/file/d/1bwQO-NOyZJVZdMAb3ro2MfxowCUpousV/view?usp=sharing)

---

## 🧱 Tech Stack

* React (Frontend)
* Vite (Build Tool)
* JavaScript
* Mock API (simulated async data)

---

## ⚙️ How to Run Locally

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173

---

## 📊 How It Works

1. Select a developer and month
2. System fetches data from mock API
3. Metrics are calculated:

   * Average cycle time
   * Average lead time
   * Bug rate
4. Insights engine:

   * Compares with previous month
   * Detects trends
   * Generates suggestions
5. Team summary:

   * Calculates team averages
   * Identifies risky developer

---

## 💡 Key Idea

Turn engineering data into actionable insights so developers and managers can make better decisions and continuously improve.

---

## 🚀 Future Improvements

* Integration with real APIs (Jira, GitHub)
* Authentication system
* Historical trend charts
* Team comparison dashboard
* Export reports

---

## 👤 Author

Atul Sharma
