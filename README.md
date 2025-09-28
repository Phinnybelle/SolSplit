# SolSplit - A Decentralized Bill Splitting Application

<div align="center">
  <img src="public/SolLogo.jpg" alt="SolSplit Logo" width="120"/>
</div>

<p align="center">
  <strong>Splitting bills with friends on Solana has never been easier.</strong>
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-team-contributions">Team</a>
</p>

---

## 🚀 About The Project

**SolSplit** is a decentralized application designed to bring clarity, trust, and efficiency to managing shared expenses. Built on the Solana blockchain, it solves the common problems of tracking shared bills by creating a transparent, shared ledger for each group.

Our key innovation is the use of a central platform wallet for collections, which removes the need to trust a single group member with funds. Payments are made effortlessly using Solana Pay's QR code technology. This repository contains the feature-rich frontend prototype developed by our team.

### Built With

- React  
- TailwindCSS  
- Solana Pay  
- Vite  
- JavaScript (ES6+)  
- Node.js (for local development)  

---

## ✨ Key Features

- **Simple Authentication:** A familiar and easy **username/password** onboarding process.  
- **Centralized Dashboard:** A responsive hub displaying real-time balances for **"You Owe"** and **"Total Owed to SolSplit,"** along with a list of recent transactions.  
- **Dynamic Group Management:**
  - Create groups with custom names and categories.  
  - **Add or remove members** from a group at any time.  
  - Mock validation ensures Solana wallet addresses meet a minimum length requirement.  
- **Intuitive Bill Splitting Flow:** A seamless three-step process:  
  1. **Add a Bill** with a description, amount, and group.  
  2. **Split the Bill** using interactive sliders.  
  3. **Confirm & Generate QR Codes** for each member's specific debt.  
- **Clickable Transaction History:** View past transactions and see a detailed breakdown of who paid and who is still pending. Each transaction is clearly marked as **"Pending"** or **"Completed."**  
- **Manual Payment Tracking:** A "Mark as Paid" feature allows the bill creator to manually update the payment status of any member, including themselves.  
- **Solana Pay QR Codes:** Generate unique QR codes for each debt that can be scanned by any Solana-compatible wallet for instant and secure payments.  

---

## 📸 Screenshots

*(Here we can add screenshots of the application's key pages)*

| Login Page | Dashboard with Modals | Payment QR Code |
| :---: | :---: | :---: |
| ![]() | ![]() | ![]() |

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18 or higher) and npm installed on your machine.

### Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Phinnybelle/SolSplit.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SolSplit
   ```
3. Install all the necessary packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

---

## 🗺️ Roadmap & Future Enhancements

- [ ] **Full Solana Wallet-Adapter Integration:** Replace the mock login with a real wallet connection.  
- [ ] **Backend Integration:** Connect the frontend to a Node.js/MongoDB backend to persist all data.  
- [ ] **Real-Time Transaction Confirmation:** Fetch confirmation from the Solana blockchain after a payment is made.  
- [ ] **Smart Contract Integration:** Move the group and expense ledger to a Solana Program for full decentralization.  
- [ ] **User Notifications:** Implement push notifications for payment requests and confirmations.  

---

## 👩‍💻 Team Contributions

This project is a collaborative effort by three dedicated developers:

- **Phinnybelle:** Login Page & Navbar  
- **Faithy:** Dashboard, Add New Group Modal, Group Details Modal, Profile Modal, and Confirm Split Page  
- **Jemmy:** Add New Bill Page, Statistics & AI Financial Insight  
