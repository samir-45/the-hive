# Daily News - Modern News Portal Front-End

A highly responsive, performant news portal front-end built with **Next.js 16 (App Router)** and **Tailwind CSS**. Designed with a focus on clean typography, visual hierarchy, and user experience similar to *Prothom Alo* or *The Daily Star*.


## 🚀 Features

- **Next.js 16 App Router**: Leveraging Server Components (RSC) for maximum performance.
- **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Routing**:
  - News Details (`/news/[id]`)
  - Category Pages (`/category/[slug]`) with filtering logic.
- **Smooth Scrolling**: Integrated **Lenis** for a premium, buttery-smooth scroll experience.
- **Modern UI Components**:
  - **Category Filtering**: Navigate news by specific topics (Sports, Tech, etc.).
  - **Featured News Section**: Highlighted hero section for top stories.
  - **Trending Sidebar**: Quick access to popular articles.
  - **Search Functionality**: Expandable client-side search bar.
- **Optimized Data Fetching**: Simulates real-world async data fetching with Skeleton loading states.
- **SEO Ready**: Semantic HTML structure and metadata configuration.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Language**: JavaScript (ES6+)

## 📂 Project Structure

```bash
my-news-app/
├── app/
│   ├── category/[categoryName]/ # Dynamic Category Pages
│   ├── news/[id]/               # Dynamic News Detail Pages
│   ├── globals.css              # Tailwind & Lenis Styles
│   ├── layout.js                # Root Layout (Header, Footer, SmoothScroll)
│   ├── page.js                  # Homepage (Server Component)
│   └── loading.js               # Global Loading Skeleton
├── components/
│   ├── Header.jsx               # Navigation & Search
│   ├── Footer.jsx               # Site Footer
│   ├── NewsCard.jsx             # Reusable News Card
│   ├── SearchBar.jsx            # Client-side Search Interaction
│   └── SmoothScroll.jsx         # Lenis Integration
├── lib/
│   └── data.js                  # Mock Database & Fetch Logic
└── public/                      # Static Assets
```

## ⚡ Getting Started

Follow these steps to run the project locally.

### Prerequisites
- Node.js 18.17 or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samir-45/the-hive.git
   cd the-hive
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Configuration

### Image Optimization
If you use external images (like Unsplash or Getty), ensure your `next.config.mjs` allows them:

```javascript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
export default nextConfig;
```

### Mock Data
You can modify the mock data in `lib/data.js` to add more articles, categories, or change the structure.

## 🎨 Customization

- **Colors**: Update the `primary` color (currently Red-600) in `tailwind.config.js` to change the brand theme.
- **Fonts**: The project uses the default Tailwind sans/serif stack. You can import Google Fonts (like Inter or Merriweather) in `app/layout.js`.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

*Developed with ❤️ using Next.js & Tailwind CSS*
```