# Nuxt.js Framework Basics Tutorial

Welcome to your hands-on introduction to **Nuxt.js** and **Vue.js**! This is a dummy project designed to help you learn the fundamental concepts of modern web development with these powerful frameworks.

## 🎯 What You'll Learn

- **Vue.js Basics**: Reactive data, templates, event handling, and component lifecycle
- **Nuxt.js Fundamentals**: File-based routing, server-side rendering, and API routes
- **Modern JavaScript**: TypeScript, async/await, and ES6+ features
- **Web Development Concepts**: Client-server communication, state management, and navigation

## 📚 Quick Framework Overview

### Vue.js
Vue.js is a progressive JavaScript framework for building user interfaces. Key concepts:
- **Reactive Data**: Variables that automatically update the UI when changed
- **Templates**: HTML with special Vue syntax for dynamic content
- **Components**: Reusable pieces of UI with their own logic and styling
- **Directives**: Special attributes like `v-if`, `v-for`, `v-model` for dynamic behavior

### Nuxt.js
Nuxt.js is a full-stack framework built on top of Vue.js that provides:
- **File-based Routing**: Create pages by adding `.vue` files to the `pages/` directory
- **Server-side Rendering (SSR)**: Better performance and SEO
- **API Routes**: Build backend endpoints alongside your frontend
- **Auto-imports**: No need to import Vue composables and utilities

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- Basic knowledge of HTML, CSS, and JavaScript/Typescript

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser and navigate to:** `http://localhost:3000`

## 📁 Project Structure

```
nuxt-app/
├── app/
│   ├── app.vue           # Root component
│   ├── pages/
│   │   └── index.vue     # Home page (route: /)
│   ├── layouts/          # Layout templates
│   └── assets/           # Static assets (CSS, images)
├── server/
│   └── api/
│       └── hello.ts      # API endpoint (/api/hello)
├── public/               # Static files (robots.txt, etc.)
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Learning Activities

### Activity 1: Understanding Reactive Data
**Goal**: Learn how Vue's reactivity system works

1. Open `app/pages/index.vue`
2. Find the textarea element and type something into it
3. Notice how the "You typed:" text updates automatically
4. **Explore**: Look at the `v-model="message"` attribute and the `{{ message }}` interpolation

**Key Concepts**: 
- `ref()` creates reactive variables
- `v-model` creates two-way data binding
- `{{ }}` displays reactive data in templates

### Activity 2: API Communication
**Goal**: Learn how frontend communicates with backend

1. Click the "Test API" button on the page
2. Open your browser's Developer Tools (F12)
3. Check the Console tab to see the API response
4. **Explore**: Look at the `testApi()` function and `server/api/hello.ts`

**Key Concepts**:
- `fetch()` for making HTTP requests
- `async/await` for handling asynchronous operations
- Nuxt automatically creates API routes from files in `server/api/`

### Activity 3: Navigation and Routing
**Goal**: Create a new page and implement navigation

1. Create a new file: `app/pages/about.vue`
2. Add some basic content to the new page:
```vue
<template>
  <div class="flex flex-col items-center min-h-screen m-5">
    <h1 class="text-2xl underline">About Page</h1>
    <p>This is the about page!</p>
    <NuxtLink to="/" class="text-blue-500 hover:underline">Back to Home</NuxtLink>
  </div>
</template>
```

3. In `app/pages/index.vue`, uncomment and complete the `movePage()` function:
```typescript
const movePage = () => {
    navigateTo('/about');
}
```

4. Add a button to call this function (add after the "Test API" button):
```vue
<button @click="movePage" class="rounded-sm bg-blue-800 hover:bg-blue-700 p-1 m-1 text-white">Go to About</button>
```

**Key Concepts**:
- File-based routing (file name = route path)
- `navigateTo()` for programmatic navigation
- `<NuxtLink>` for declarative navigation

### Activity 4: Component Props and Events (Bonus)
**Goal**: Create a reusable component

1. Create `app/components/Counter.vue`:
```vue
<template>
  <div class="p-4 border rounded">
    <h3>Counter: {{ count }}</h3>
    <button @click="increment" class="bg-green-500 text-white p-2 rounded mr-2">+</button>
    <button @click="decrement" class="bg-red-500 text-white p-2 rounded">-</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
</script>
```

2. Use it in `index.vue` by adding `<Counter />` to your template

**Key Concepts**:
- Components are reusable pieces of UI
- Auto-imported components (no import statement needed in Nuxt)

## 🎨 Styling Notes

This project uses **Tailwind CSS** for styling. Some useful classes:
- `flex`, `flex-col`, `items-center` - Flexbox layout
- `p-2`, `m-2` - Padding and margin
- `bg-gray-200`, `text-white` - Colors
- `rounded`, `hover:bg-blue-700` - Styling and hover effects

## 📖 Additional Resources

- [Vue.js Official Guide](https://vuejs.org/guide/)
- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚀 Next Steps

After completing the activities:
1. Try creating more pages and components
2. Experiment with different Vue directives (`v-if`, `v-for`)
3. Create more API endpoints
4. Add form validation and error handling
5. Explore Nuxt plugins and middleware

## 💡 Tips for Success

- Use the browser's Developer Tools to debug
- Read error messages carefully - they're usually helpful!
- Don't be afraid to experiment and break things
- Use `console.log()` to understand what's happening
- Ask questions and look things up - that's what developers do!

## 🛠️ Commands Reference

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Useful during development
npm run typecheck    # Check TypeScript errors
```

---

**Happy coding! 🎉** Remember, the best way to learn is by doing. Don't just read the code - modify it, break it, fix it, and make it your own!
