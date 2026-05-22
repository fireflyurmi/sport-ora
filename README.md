# 🏆 SportOra

> A premium, responsive sports venue and facility booking platform designed to streamline reservation tracking, venue scheduling, and facility management.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=google-chrome&logoColor=white)]([https://your-live-link.com](https://sportora-peach.vercel.app/)) 

---

## 📌 Project Purpose

**SportOra** is built to bridge the gap between sports enthusiasts and facility owners. It provides a seamless user experience for discovering premium sports venues, reserving playing slots, and managing custom facilities. By offering a dynamic dashboard with real-time data filtering, structural consistency, and role-specific account management, SportOra takes the hassle out of coordination so players can focus on the game.

---

## 🚀 Core Features

### 🔐 Multi-Tiered User Authentication & Middleware Fallbacks
* Secure token-based access handling client identities via remote JWKS verification.
* Robust development fallback route protections checking and filtering administrative contexts flawlessly.

### 📅 Seamless Booking Workflow & User Metrics
* Interactive reservation system with dynamic slot allocations.
* Auto-incrementing counters to track and update individual user booking metrics instantly.

### 💼 Personalized "Manage My Facilities" Dashboard
* Context-aware data isolation: Users can view, search, edit, or delete **only** the specific facilities they created.
* Integrated responsive modals to update price structures, hourly rates, and player capacities seamlessly.

### 🔍 Advanced Search & Dynamic Multi-Filtering
* Real-time query filtering using partial matching MongoDB operators.
* Search functionality utilizing `$regex` and `$options: "i"` for flexible case-insensitive text matching by name or location.
* Category filtering utilizing array-based operations to filter locations by athletic classifications (e.g., Football Turf, Badminton Court, Swim Center).

### 🎨 Responsive Modern UI/UX Layout
* Styled using **HeroUI** component design structures for fluid transitions and structural uniformity.
* Fully adaptive layout supporting responsive containers across all device viewports.
* Elegant dark/light color treatments emphasizing structural clarity and scannability.

---

### Frontend Dependencies (`/client`)
* **`react`** & **`react-dom`** - Core application framework layers.
* **`next`** - Server-side rendering and client routing architecture.
* **`@heroui/react`** - Premium React component library for uniform, modern UI layout.
* **`tailwindcss`** - Utility-first styling framework for complete custom responsive responsiveness.
* **`sweetalert2`** - Beautiful, accessible, and customizable popup dialog notifications for secure user deletion confirmation alerts.
* **`react-toastify`** - Non-blocking clean toast notifications for real-time form submission updates.
* **`react-icons`** - Clean, modern vector icon iconography.
* **`framer-motion`** - Clean, modern animation.

---

### Backend Dependencies (`/server`)
* **`express`** - Minimalist web framework for handling API routing logic.
* **`mongodb`** - Official MongoDB driver for cluster execution, aggregation, and raw collection mapping.
* **`jose-cjs`** - Advanced JSON Web Token (JWT) handling, state decoding, and signature validation.
* **`dotenv`** - Secure isolation of database keys and environmental parameters.
* **`cors`** - Cross-Origin Resource Sharing handling mechanisms for smooth front-to-back connectivity.

---

## 🛠️ Local Installation & Setup

Follow these quick steps to launch the repository infrastructure on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/fireflyurmi/sport-ora.git](https://github.com/fireflyurmi/sport-ora.git)
   cd sportora
