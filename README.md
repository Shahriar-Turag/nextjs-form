# 🧾 Multi-Step Form with Validation (Front-End Developer Task)

This is a multi-step form application built using **Next.js App Router**, **React Hook Form**, **Zod**, **Redux Toolkit (with RTK Query)**, and **TailwindCSS**.

> ✅ Designed for performance, accessibility, and developer experience.  
> ✅ Supports client-side validation, step navigation, summary preview, API simulation, and dark mode.

---

## 🚀 How to Run the Project

### 1. **Clone the repository**

```bash
git clone https://github.com/Shahriar-Turag/nextjs-form.git
cd nextjs-form
npm install
npm run dev
```

## 🚀 Live Demo

> Hosted on [Vercel](https://multistepform-orcin.vercel.app/)

---

## 📦 Tech Stack

-   **Next.js (App Router)**
-   **React Hook Form**
-   **Zod (schema validation)**
-   **Redux Toolkit + RTK Query**
-   **TailwindCSS**
-   **TypeScript**

---

## ✨ Features

-   Multi-step form with three steps:
    -   **Step 1**: Personal Information
    -   **Step 2**: Address Details
    -   **Step 3**: Account Setup
    -   **Step 4**: Final Summary & Submit
-   Form validation with **Zod**
-   Shows error messages below each field
-   Navigation with **Next** and **Previous** buttons
-   Summary preview before submission
-   Simulates API submission using **RTK Query**
-   Logs submitted data to console
-   Supports **Dark Mode**
-   Responsive on all devices
-   Step indicator / **Stepper UI**

---

## 📁 Folder Structure

```bash
app/
  ├── components/
  │   ├── Step1.tsx
  │   ├── Step2.tsx
  │   ├── Step3.tsx
  │   ├── Summary.tsx
  │   └── Stepper.tsx
  ├── page.tsx             # Main page – shows current step
  ├── layout.tsx           # Root layout
  └── api/
      └── submit/
          └── route.ts     # API simulation (mock POST endpoint)

redux/
  ├── store.ts
  ├── formSlice.ts
  └── formApi.ts
```
