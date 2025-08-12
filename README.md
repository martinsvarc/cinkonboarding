# Social Media Monetization Onboarding Page

A high-converting onboarding page for a done-for-you social media monetization system, built with Next.js and Tailwind CSS.

## Features

- **Jeremy Miner NEPQ Style Copy**: Neutral, conversational tone focused on problem-awareness and curiosity-building
- **Professional Form**: Collects Name, Last Name, Phone, Email, Price, and Salesman information
- **React Hook Form Validation**: Comprehensive form validation with error handling
- **Webhook Integration**: Submits data to specified webhook endpoint
- **Mobile Responsive**: Clean, professional design that works on all devices
- **Success State**: Clear confirmation message after successful submission
- **Next Steps Section**: Clear process flow for the closer

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hook Form
- Custom CSS with glow effects and animations

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000/onboarding](http://localhost:3000/onboarding) in your browser.

## Form Fields

- **First Name** (required)
- **Last Name** (required)
- **Phone Number** (required)
- **Email Address** (required, validated format)
- **Price** (required, number input)
- **Salesman** (required)

## Webhook Integration

The form submits data as JSON to:
```
https://n8n.automatedsolarbiz.com/webhook/69d2595d-5eb0-4fe5-9bbe-2db883ec58df
```

## Styling

The page uses a custom `globals.css` file with:
- Dark theme with gray and blue color scheme
- Glow effects and animations
- Professional, neutral design
- Mobile-responsive layout
- Custom button and card components

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── pages/
│   ├── _app.tsx          # Main app component
│   ├── _document.tsx     # HTML document structure
│   └── onboarding.tsx    # Onboarding page
├── styles/
│   └── globals.css       # Global styles and Tailwind imports
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```
