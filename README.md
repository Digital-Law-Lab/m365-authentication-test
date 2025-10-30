# M365 Authentication Test

A SvelteKit application demonstrating authentication to Supabase using M365 (Azure) OAuth.

## Features

- 🔐 Microsoft 365 (Azure AD) OAuth authentication
- 🗄️ Supabase backend integration
- 🔒 Protected routes requiring authentication
- 👤 User profile and metadata display
- 🎨 Clean, modern UI

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Supabase account and project
- An Azure AD (Microsoft Entra ID) application configured

## Setup Instructions

### 1. Supabase Configuration

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Authentication** → **Providers** → **Azure**
3. Enable the Azure provider
4. Note down your Supabase project URL and anon key from **Settings** → **API**

### 2. Azure AD Application Setup

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations**
3. Create a new registration:
   - Name: Your app name
   - Supported account types: Choose based on your needs
   - Redirect URI: `https://<your-supabase-project-ref>.supabase.co/auth/v1/callback`
4. Note the **Application (client) ID** and **Directory (tenant) ID**
5. Go to **Certificates & secrets** → Create a new client secret
6. Note the secret value (shown only once)

### 3. Connect Azure AD to Supabase

1. In Supabase, go to **Authentication** → **Providers** → **Azure**
2. Enable the provider and enter:
   - **Azure Tenant ID**: Your Directory (tenant) ID
   - **Azure Client ID**: Your Application (client) ID
   - **Azure Secret**: Your client secret value
3. Save the configuration

### 4. Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your values:
   ```env
   PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### 5. Install Dependencies

```bash
npm install
```

### 6. Run the Application

Development mode:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

1. Click **"Sign in with Microsoft 365"** on the home page
2. Authenticate with your M365 credentials
3. You'll be redirected back to the app
4. Click **"View Protected Resource"** to see your authenticated user information
5. Use **"Sign Out"** to log out

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Root layout with auth state management
│   ├── +layout.ts              # Client-side Supabase setup
│   ├── +layout.server.ts       # Server-side session handling
│   ├── +page.svelte            # Home page with login
│   ├── auth/
│   │   ├── callback/
│   │   │   └── +server.ts      # OAuth callback handler
│   │   └── auth-code-error/
│   │       └── +page.svelte    # Error page
│   └── protected/
│       ├── +page.svelte        # Protected page (authenticated only)
│       └── +page.server.ts     # Server-side data fetching
├── hooks.server.ts             # Server hooks for auth
└── app.d.ts                    # TypeScript definitions

```

## How It Works

1. **Authentication Flow**:
   - User clicks "Sign in with Microsoft 365"
   - App redirects to Azure AD OAuth page
   - User authenticates with M365 credentials
   - Azure redirects back to Supabase callback URL
   - Supabase exchanges code for session
   - User is redirected back to the app

2. **Session Management**:
   - Sessions are stored in HTTP-only cookies
   - Server-side validation on every request
   - Client-side auth state updates automatically

3. **Protected Routes**:
   - Server checks for valid session
   - Redirects to home page if not authenticated
   - Fetches user data from Supabase

## Building for Production

```bash
npm run build
npm run preview
```

## Technologies Used

- [SvelteKit](https://kit.svelte.dev/) - Full-stack framework
- [Supabase](https://supabase.com/) - Backend and authentication
- [@supabase/ssr](https://github.com/supabase/ssr) - Server-side rendering support
- TypeScript - Type safety

## License

MIT
