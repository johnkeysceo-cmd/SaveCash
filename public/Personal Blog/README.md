# Personal Blog

A beautiful, modern personal blog built with Next.js, React Query, and Framer Motion.

## Features

- **Modern Design**: Clean, elegant typography with custom fonts (Playfair Display, Spectral, Crimson Pro)
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Search & Filter**: Real-time search and category filtering
- **Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with React Query for efficient data fetching

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── blog/              # Blog-specific components
│   │   ├── PostCard.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── SearchBar.tsx
│   ├── ui/                # Reusable UI components
│   │   └── skeleton.tsx
│   └── providers.tsx      # React Query provider
├── lib/                   # Utility functions
│   └── utils.ts
└── api/                   # API client
    └── blogClient.ts
```

## Customization

The blog is designed to be easily customizable:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `app/globals.css`
- **Content**: Replace the mock data in `api/blogClient.ts` with your actual API
- **Styling**: Customize components in the `components/` directory

## License

MIT License - feel free to use this template for your own blog!
