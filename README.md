# Better Auth Example

A robust and secure authentication system with multiple sign-in options and modern security practices.
[Better Auth](https://www.better-auth.com/)

## 🚀 Features

- **Authentication Methods**:
  - Google OAuth 2.0
  - Email/Password (Credentials)
- **Frontend**: Simple React app with protected routes
- **Backend**: Node.js with Express
- **Database**: PostgreSQL with Prisma ORM
- **Security**:
  - Password hashing (bcrypt)
  - JWT-based sessions
  - CSRF protection

## 📋 Prerequisites

- Node.js v16+
- PostgreSQL
- Google OAuth credentials (Get them from [Google Cloud Console](https://console.cloud.google.com/apis/dashboard))

> **How to get Google OAuth Credentials**:
>
> - Visit [Google Cloud Console](https://console.cloud.google.com/apis/dashboard)
> - Navigate to **APIs & Services > Credentials**
> - Click **Create Credentials** → **OAuth Client ID**
> - Configure consent screen and download your Client ID and Client Secret.

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/habtesh-beki/Better_Auth_Example.git
cd Better_Auth_Example
pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file inside the `server` folder and add the following:

```bash
BETTER_AUTH_SECRET="your_secret_key"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"
```

> 🔔 Make sure to replace `user`, `password`, and `database` with your actual PostgreSQL credentials.

### 3. Set Up the Database and Start the Project

Open your terminal and run:

```bash
npx prisma generate
npx @better-auth/cli@latest generate
pnpm dev
```
