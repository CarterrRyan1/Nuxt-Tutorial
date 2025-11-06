# Nuxt.js Learning Project

Welcome to your hands-on introduction to Nuxt.js and Vue.js! This is a dummy project designed to help you learn the fundamental concepts of modern web development with these powerful frameworks.

## What You'll Learn

- **Vue.js Basics**: Reactive data, templates, event handling, and component lifecycle
- **Nuxt.js Fundamentals**: File-based routing, server-side rendering, and API routes
- **Modern JavaScript**: TypeScript, async/await, and ES6+ features
- **Web Development Concepts**: Client-server communication, state management, and navigation
- **Testing**: Unit tests with Vitest and E2E tests with Playwright
- **Best Practices**: Component composition, error handling, and accessibility

## Understanding the Stack

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

## Prerequisites

- Node.js (version 16 or higher)
- Basic knowledge of HTML, CSS, and JavaScript/TypeScript

## Getting Started

Ensure you are cd into `nuxt-app`

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
nuxt-app/
├── app/
│   ├── app.vue           # Root component
│   ├── pages/            # File-based routes
│   │   └── index.vue     # Home page (route: /)
│   ├── components/       # Reusable components
│   ├── composables/      # Reusable logic
│   ├── layouts/          # Layout templates
│   └── assets/           # Static assets (CSS, images)
├── server/
│   └── api/              # API endpoints
│       └── hello.ts      # Example API endpoint (/api/hello)
├── public/               # Static files (robots.txt, etc.)
├── nuxt.config.ts        # Nuxt configuration
└── package.json          # Dependencies and scripts
```

---

# Learning Activities

## 🟢 Beginner Tasks

### Task 1: Reactive Data & Two-Way Binding

**Goal**: Learn how Vue's reactivity system works

**Steps**:
1. Open `app/pages/index.vue`
2. Find the textarea element and type something into it
3. Notice how the "You typed:" text updates automatically
4. Explore: Look at the `v-model="message"` attribute and the `{{ message }}` interpolation

**Key Concepts**:
- `ref()` creates reactive variables
- `v-model` creates two-way data binding
- `{{ }}` displays reactive data in templates

**Success Criteria**: You understand how changing input updates the display automatically

---

### Task 2: API Communication

**Goal**: Learn how frontend communicates with backend

**Steps**:
1. Click the "Test API" button on the page
2. Open your browser's Developer Tools (F12)
3. Check the Console tab to see the API response
4. Explore: Look at the `testApi()` function and `server/api/hello.ts`

**Key Concepts**:
- `fetch()` for making HTTP requests
- `async/await` for handling asynchronous operations
- Nuxt automatically creates API routes from files in `server/api/`

**Success Criteria**: You see the API response logged in the console

---

### Task 3: File-Based Routing & Navigation

**Goal**: Create a new page and implement navigation

**Steps**:
1. Create a new file: `app/pages/about.vue`
2. Add some basic content to the new page:

```vue
<template>
  <div class="flex flex-col items-center min-h-screen m-5">
    <h1 class="text-2xl underline">About Page</h1>
    <p>This is the about page!</p>
    <NuxtLink to="/" class="text-blue-500 hover:underline">
      Back to Home
    </NuxtLink>
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
<button @click="movePage" class="rounded-sm bg-blue-800 hover:bg-blue-700 p-1 m-1 text-white">
  Go to About
</button>
```

**Key Concepts**:
- File-based routing (file name = route path)
- `navigateTo()` for programmatic navigation
- `<NuxtLink>` for declarative navigation

**Success Criteria**: You can navigate between Home and About pages using both methods

---

### Task 4: Component Creation & Reusability

**Goal**: Create a reusable component

**Steps**:
1. Create `app/components/Counter.vue`:

```vue
<template>
  <div class="p-4 border rounded">
    <h3 class="text-lg font-semibold mb-2">Counter: {{ count }}</h3>
    <button @click="increment" class="bg-green-500 text-white p-2 rounded mr-2">
      +
    </button>
    <button @click="decrement" class="bg-red-500 text-white p-2 rounded">
      -
    </button>
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
- Each component instance has its own state

**Success Criteria**: Multiple Counter components on the same page work independently

---

## 🟡 Intermediate Tasks

### Task 5: Props & Component Communication

**Goal**: Pass data from parent to child components

**Steps**:
1. Create `app/components/UserCard.vue`:

```vue
<template>
  <div class="border rounded-lg p-4 shadow-md">
    <h3 class="text-xl font-bold">{{ name }}</h3>
    <p class="text-gray-600">{{ email }}</p>
    <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mt-2">
      {{ role }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  email: string;
  role: string;
}

defineProps<Props>();
</script>
```

2. Use it in a page, passing different prop values:

```vue
<UserCard 
  name="John Doe" 
  email="john@example.com" 
  role="Developer" 
/>
```

**Key Concepts**:
- Props pass data from parent to child
- TypeScript interfaces for type-safe props
- Props are read-only in child components

**Success Criteria**: Display multiple UserCard components with different data

---

### Task 6: Composables (Reusable Logic)

**Goal**: Extract and reuse logic across components

**Steps**:
1. Create `app/composables/useCounter.ts`:

```typescript
export const useCounter = (initialValue: number | 0) => {
  const count = ref(initialValue);
  
  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value = initialValue;
  
  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  };
};
```

2. Use it in a component:

```vue
<script setup lang="ts">
const { count, increment, decrement, reset } = useCounter(10);
</script>
```

**Key Concepts**:
- Composables extract reusable logic
- Each component gets its own instance
- Follows Vue's composition API pattern

**Success Criteria**: Use the same composable in multiple components with independent state

---

### Task 7: Forms with Validation

**Goal**: Build a form with client-side validation

**Steps**:
1. Create `app/pages/contact.vue` with a contact form
2. Implement validation rules:
   - Name: required, min 2 characters
   - Email: required, valid email format
   - Message: required, min 10 characters
3. Show error messages below each field
4. Disable submit button until form is valid

**Example Structure**:

```vue
<script setup lang="ts">
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  message: ''
});

const validateName = () => {
  if (!formData.value.name) {
    errors.value.name = 'Name is required';
  } else if (formData.value.name.length < 2) {
    errors.value.name = 'Name must be at least 2 characters';
  } else {
    errors.value.name = '';
  }
};

// Add more validation functions...

const isFormValid = computed(() => {
  return !errors.value.name && !errors.value.email && !errors.value.message
    && formData.value.name && formData.value.email && formData.value.message;
});

const submitForm = () => {
  if (isFormValid.value) {
    console.log('Form submitted:', formData.value);
  }
};
</script>
```

**Key Concepts**:
- Form handling with `v-model`
- Computed properties for derived state
- Conditional rendering with `v-if`
- Real-time validation feedback

**Success Criteria**: Form prevents invalid submissions and shows helpful error messages

---

### Task 8: API Integration with Loading States

**Goal**: Handle async data with proper UX patterns

**Steps**:
1. Create `server/api/users.ts` that returns mock data after a delay:

```typescript
export default defineEventHandler(async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Carol Williams', email: 'carol@example.com' }
  ];
});
```

2. Create `app/pages/users.vue` that fetches and displays this data
3. Implement three states: loading, error, and success
4. Show a loading spinner while fetching
5. Display error message if fetch fails

**Key Concepts**:
- Managing async state
- User experience during loading
- Error handling with try-catch
- Conditional rendering for different states

**Success Criteria**: Smooth transition between loading, error, and success states

---

### Task 9: Dynamic Routes

**Goal**: Create pages that respond to URL parameters

**Steps**:
1. Create `app/pages/users/[id].vue` for user detail pages
2. Access the route parameter using `useRoute()`
3. Fetch user data based on the ID
4. Add a "Back to Users" link
5. Create links from the users list to individual user pages

**Example**:

```vue
<script setup lang="ts">
const route = useRoute();
const userId = route.params.id;

// Fetch user data based on userId
const { data: user, pending, error } = await useFetch(`/api/users/${userId}`);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error loading user</div>
  <div v-else>
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
  </div>
</template>
```

**Key Concepts**:
- Dynamic route parameters with `[id]` syntax
- Accessing route params with `useRoute()`
- `useFetch` composable for data fetching
- Creating detail/list view patterns

**Success Criteria**: Navigate from user list to individual user pages via URL

---

### Task 10: List Rendering & Filtering

**Goal**: Display and manipulate lists of data

**Steps**:
1. Create a page that displays a list of items (products, tasks, etc.)
2. Add a search input to filter the list
3. Add sort buttons (A-Z, Z-A)
4. Use `v-for` to render the list
5. Show a message when no results match the filter

**Example Structure**:

```vue
<script setup lang="ts">
const items = ref([
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' }
]);

const searchQuery = ref('');
const sortOrder = ref<'asc' | 'desc'>('asc');

const filteredItems = computed(() => {
  let result = items.value.filter(item => 
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  
  return result.sort((a, b) => {
    if (sortOrder.value === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
});
</script>
```

**Key Concepts**:
- `v-for` for list rendering
- Computed properties for filtering and sorting
- Reactive search functionality
- Array methods (filter, sort)

**Success Criteria**: Real-time filtering and sorting of a list

---

## 🔴 Advanced Tasks

### Task 11: State Management with Pinia

**Goal**: Manage shared state across multiple components

**Steps**:
1. Install Pinia: `npm install pinia @pinia/nuxt`
2. Add to `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@pinia/nuxt']
});
```

3. Create `stores/cart.ts`:

```typescript
export const useCartStore = defineStore('cart', () => {
  const items = ref<Array<{ id: number; name: string; quantity: number }>>([]);
  
  const addItem = (item: { id: number; name: string }) => {
    const existing = items.value.find(i => i.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  };
  
  const removeItem = (id: number) => {
    const index = items.value.findIndex(i => i.id === id);
    if (index > -1) items.value.splice(index, 1);
  };
  
  const totalItems = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  );
  
  return { items, addItem, removeItem, totalItems };
});
```

4. Use the store in multiple components to share cart state

**Key Concepts**:
- Global state management
- Shared state across components
- Store actions and getters
- Reactive store updates

**Success Criteria**: Cart updates in one component reflect in all other components

---

### Task 12: Middleware & Route Protection

**Goal**: Protect routes and control navigation

**Steps**:
1. Create `middleware/auth.ts`:

```typescript
export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useState('isAuthenticated', () => false);
  
  if (!isAuthenticated.value && to.path !== '/login') {
    return navigateTo('/login');
  }
});
```

2. Create a login page at `pages/login.vue`
3. Create a protected page at `pages/dashboard.vue`:

```vue
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
</script>
```

4. Implement mock login/logout functionality

**Key Concepts**:
- Route middleware
- Navigation guards
- State persistence
- Protected routes

**Success Criteria**: Unauthenticated users are redirected to login page

---

### Task 13: CRUD API with In-Memory Database

**Goal**: Build a complete backend API with all HTTP methods

**Steps**:
1. Create `server/api/todos/index.ts`:

```typescript
// In-memory "database"
let todos = [
  { id: 1, title: 'Learn Nuxt', completed: false },
  { id: 2, title: 'Build an app', completed: false }
];

export default defineEventHandler(async (event) => {
  const method = event.method;
  
  if (method === 'GET') {
    return todos;
  }
  
  if (method === 'POST') {
    const body = await readBody(event);
    const newTodo = {
      id: Date.now(),
      title: body.title,
      completed: false
    };
    todos.push(newTodo);
    return newTodo;
  }
});
```

2. Create `server/api/todos/[id].ts` for individual todo operations:

```typescript
export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id);
  const method = event.method;
  
  if (method === 'PUT') {
    const body = await readBody(event);
    const index = todos.findIndex(t => t.id === id);
    if (index > -1) {
      todos[index] = { ...todos[index], ...body };
      return todos[index];
    }
    return createError({ statusCode: 404, message: 'Todo not found' });
  }
  
  if (method === 'DELETE') {
    const index = todos.findIndex(t => t.id === id);
    if (index > -1) {
      todos.splice(index, 1);
      return { success: true };
    }
    return createError({ statusCode: 404, message: 'Todo not found' });
  }
});
```

3. Build a frontend that uses all CRUD operations

**Key Concepts**:
- RESTful API design
- HTTP methods (GET, POST, PUT, DELETE)
- Request body handling
- Error responses

**Success Criteria**: Full CRUD operations working from frontend to backend

---

### Task 14: Error Handling & Custom Error Pages

**Goal**: Handle errors gracefully with good UX

**Steps**:
1. Create `app/error.vue`:

```vue
<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold">{{ error.statusCode }}</h1>
      <p class="text-xl mt-4">{{ error.message }}</p>
      <button @click="handleError" class="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Go Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: '/' });
</script>
```

2. Create `composables/useToast.ts` for notifications:

```typescript
export const useToast = () => {
  const toasts = useState('toasts', () => []);
  
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    toasts.value.push({ id, message, type });
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id);
    }, 3000);
  };
  
  return { toasts, showToast };
};
```

3. Add try-catch blocks to API calls with toast notifications

**Key Concepts**:
- Custom error pages
- Global error handling
- User feedback mechanisms
- Graceful degradation

**Success Criteria**: Errors display helpful messages and don't break the app

---

### Task 15: Unit Testing with Vitest

**Goal**: Write tests for your code

**Steps**:
1. Create `utils/formatters.ts` with utility functions:

```typescript
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
```

2. Create `utils/formatters.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { formatCurrency, truncateText } from './formatters';

describe('formatCurrency', () => {
  it('formats numbers as USD currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });
  
  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });
});

describe('truncateText', () => {
  it('truncates text longer than maxLength', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello...');
  });
  
  it('does not truncate text shorter than maxLength', () => {
    expect(truncateText('Hi', 5)).toBe('Hi');
  });
});
```

3. Run tests: `npm run test`

**Key Concepts**:
- Unit testing principles
- Test-driven development
- Arrange-Act-Assert pattern
- Edge case testing

**Success Criteria**: All tests pass and you understand what they verify

---

### Task 16: E2E Testing with Playwright

**Goal**: Test user interactions across the entire app

**Steps**:
1. Create `tests/e2e/navigation.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test('navigates to about page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await page.click('text=Go to About');
  
  await expect(page).toHaveURL('http://localhost:3000/about');
  await expect(page.locator('h1')).toContainText('About Page');
});

test('submits contact form', async ({ page }) => {
  await page.goto('http://localhost:3000/contact');
  
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message');
  
  await page.click('button[type="submit"]');
  
  await expect(page.locator('text=Success')).toBeVisible();
});
```

2. Run tests: `npm run test:e2e`

**Key Concepts**:
- End-to-end testing
- User interaction simulation
- Page object patterns
- Async test handling

**Success Criteria**: Tests pass and cover critical user flows

---

## 🎨 UI/UX Enhancement Tasks

### Task 17: Transitions & Animations

**Goal**: Add smooth transitions to improve UX

**Steps**:
1. Add page transitions in `app.vue`:

```vue
<template>
  <NuxtPage :transition="{
    name: 'page',
    mode: 'out-in'
  }" />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
```

2. Add list transitions using `<TransitionGroup>`:

```vue
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</TransitionGroup>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
```

3. Create a loading spinner component

**Key Concepts**:
- Vue transitions
- CSS animations
- Transform and opacity
- Transition modes

**Success Criteria**: Smooth animations when navigating and updating lists

---

### Task 18: Dark Mode Toggle

**Goal**: Implement theme switching

**Steps**:
1. Update `tailwind.config.ts` to enable dark mode:

```typescript
export default {
  darkMode: 'class',
  // ... rest of config
}
```

2. Create `composables/useDarkMode.ts`:

```typescript
export const useDarkMode = () => {
  const isDark = useState('darkMode', () => false);
  
  const toggleDark = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };
  
  // Initialize from localStorage
  onMounted(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored === 'true') {
      isDark.value = true;
      document.documentElement.classList.add('dark');
    }
  });
  
  return { isDark, toggleDark };
};
```

3. Create a toggle button component
4. Add dark mode classes to your components:

```vue
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Content here
</div>
```

**Key Concepts**:
- Tailwind dark mode
- localStorage persistence
- Class manipulation
- Theme consistency

**Success Criteria**: Toggle between light and dark themes with persistence

---

### Task 19: Responsive Design

**Goal**: Make the app work on all screen sizes

**Steps**:
1. Create a responsive navigation component:

```vue
<template>
  <nav class="bg-gray-800 text-white">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="text-xl font-bold">My App</div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
        
        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden pb-4">
        <NuxtLink to="/" class="block py-2">Home</NuxtLink>
        <NuxtLink to="/about" class="block py-2">About</NuxtLink>
        <NuxtLink to="/contact" class="block py-2">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>
```

2. Use Tailwind responsive classes throughout:
   - `sm:`, `md:`, `lg:`, `xl:` prefixes
   - Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
   - Text sizes: `text-sm md:text-base lg:text-lg`

**Key Concepts**:
- Mobile-first design
- Tailwind breakpoints
- Responsive navigation patterns
- Flexible layouts

**Success Criteria**: App looks good on mobile, tablet, and desktop

---

### Task 20: Accessibility Improvements

**Goal**: Make your app usable for everyone

**Steps**:
1. Add proper ARIA labels to interactive elements:

```vue
<button 
  aria-label="Close menu"
  @click="closeMenu"
>
  <CloseIcon />
</button>
```

2. Ensure keyboard navigation works:
   - Tab through all interactive elements
   - Enter/Space to activate buttons
   - Escape to close modals

3. Add focus styles:

```vue
<button class="focus:ring-2 focus:ring-blue-500 focus:outline-none">
  Click me
</button>
```

4. Use semantic HTML:
   - `<nav>` for navigation
   - `<main>` for main content
   - `<header>` and `<footer>`
   - Proper heading hierarchy (h1 → h2 → h3)

5. Check color contrast ratios (use browser dev tools)

**Key Concepts**:
- ARIA attributes
- Keyboard navigation
- Semantic HTML
- Focus management
- Color contrast

**Success Criteria**: Navigate the entire app using only keyboard

---

## 🚀 Real-World Application Tasks

### Task 21: Build a Complete Todo App

**Goal**: Combine multiple concepts into a full-featured app

**Requirements**:
- Create, read, update, delete todos
- Mark todos as complete/incomplete
- Filter todos (all, active, completed)
- Persist todos to API
- Show total count
- Add due dates
- Sort by priority or date
- Loading states during API calls
- Error handling with user feedback

**Key Concepts**:
- Full CRUD operations
- Component composition
- State management
- API integration
- UX best practices

**Success Criteria**: A production-ready todo app with all features working

---

### Task 22: Image Upload & Preview

**Goal**: Handle file uploads

**Steps**:
1. Create an image upload form with preview:

```vue
<template>
  <div>
    <input 
      type="file" 
      accept="image/*" 
      @change="handleFileChange"
    />
    <img v-if="previewUrl" :src="previewUrl" class="mt-4 max-w-xs" />
  </div>
</template>

<script setup lang="ts">
const previewUrl = ref<string | null>(null);
const file = ref<File | null>(null);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const selectedFile = target.files?.[0];
  
  if (selectedFile) {
    file.value = selectedFile;
    
    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      previewUrl.value = e.target?.result as string;
    };
    reader.readAsDataURL(selectedFile);
  }
};

const uploadImage = async () => {
  if (!file.value) return;
  
  const formData = new FormData();
  formData.append('image', file.value);
  
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    console.log('Upload successful:', data);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
</script>
```

2. Create `server/api/upload.ts`:

```typescript
import { writeFile } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  
  if (!formData) {
    throw createError({
      statusCode: 400,
      message: 'No file uploaded'
    });
  }
  
  const file = formData.find(item => item.name === 'image');
  
  if (!file) {
    throw createError({
      statusCode: 400,
      message: 'No image file found'
    });
  }
  
  // Save file (in production, use cloud storage)
  const filename = `${Date.now()}-${file.filename}`;
  const filepath = join(process.cwd(), 'public', 'uploads', filename);
  
  await writeFile(filepath, file.data);
  
  return {
    success: true,
    filename,
    url: `/uploads/${filename}`
  };
});
```

**Key Concepts**:
- File input handling
- FileReader API
- FormData for file uploads
- Multipart form data
- Image preview before upload

**Success Criteria**: Upload images and see preview before sending to server

---

### Task 23: Debounced Search

**Goal**: Optimize search with debouncing

**Steps**:
1. Create `composables/useDebounce.ts`:

```typescript
export const useDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
) => {
  const timeoutId = ref<NodeJS.Timeout | null>(null);
  
  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }
    
    timeoutId.value = setTimeout(() => {
      fn(...args);
    }, delay);
  };
  
  return debouncedFn;
};
```

2. Implement search with API calls:

```vue
<script setup lang="ts">
const searchQuery = ref('');
const results = ref([]);
const loading = ref(false);

const performSearch = async (query: string) => {
  if (!query.trim()) {
    results.value = [];
    return;
  }
  
  loading.value = true;
  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    results.value = await response.json();
  } catch (error) {
    console.error('Search failed:', error);
  } finally {
    loading.value = false;
  }
};

const debouncedSearch = useDebounce(performSearch, 500);

watch(searchQuery, (newQuery) => {
  debouncedSearch(newQuery);
});
</script>

<template>
  <div>
    <input 
      v-model="searchQuery" 
      type="text" 
      placeholder="Search..."
      class="border rounded px-4 py-2 w-full"
    />
    
    <div v-if="loading" class="mt-2">Searching...</div>
    
    <div v-else-if="results.length" class="mt-4">
      <div v-for="result in results" :key="result.id" class="p-2 border-b">
        {{ result.name }}
      </div>
    </div>
    
    <div v-else-if="searchQuery" class="mt-2 text-gray-500">
      No results found
    </div>
  </div>
</template>
```

3. Create the search API endpoint:

```typescript
// server/api/search.ts
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const searchTerm = query.q as string;
  
  // Mock search results
  const allItems = [
    { id: 1, name: 'Apple iPhone' },
    { id: 2, name: 'Samsung Galaxy' },
    { id: 3, name: 'Google Pixel' },
    { id: 4, name: 'Apple Watch' },
    { id: 5, name: 'Samsung Tablet' }
  ];
  
  if (!searchTerm) return [];
  
  return allItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
});
```

**Key Concepts**:
- Debouncing to reduce API calls
- Watch for input changes
- Race condition handling
- Performance optimization
- UX during async operations

**Success Criteria**: Search only fires after user stops typing for 500ms

---

### Task 24: Pagination

**Goal**: Handle large datasets efficiently

**Steps**:
1. Create `server/api/items.ts` with pagination:

```typescript
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 10;
  
  // Mock data - 100 items
  const allItems = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`
  }));
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const items = allItems.slice(startIndex, endIndex);
  
  return {
    items,
    pagination: {
      page,
      limit,
      total: allItems.length,
      totalPages: Math.ceil(allItems.length / limit),
      hasNext: endIndex < allItems.length,
      hasPrev: page > 1
    }
  };
});
```

2. Create `components/Pagination.vue`:

```vue
<template>
  <div class="flex items-center justify-center space-x-2 mt-6">
    <button
      @click="$emit('page-change', currentPage - 1)"
      :disabled="!hasPrev"
      class="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    
    <span class="px-4">
      Page {{ currentPage }} of {{ totalPages }}
    </span>
    
    <button
      @click="$emit('page-change', currentPage + 1)"
      :disabled="!hasNext"
      class="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

defineProps<Props>();
defineEmits<{
  'page-change': [page: number];
}>();
</script>
```

3. Use pagination in a page:

```vue
<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const currentPage = computed(() => parseInt(route.query.page as string) || 1);

const { data, pending, refresh } = await useFetch('/api/items', {
  query: { page: currentPage, limit: 10 },
  watch: [currentPage]
});

const handlePageChange = (page: number) => {
  router.push({ query: { page } });
};
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>
    
    <div v-else>
      <div v-for="item in data.items" :key="item.id" class="p-4 border-b">
        <h3 class="font-semibold">{{ item.name }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
      </div>
      
      <Pagination
        :current-page="data.pagination.page"
        :total-pages="data.pagination.totalPages"
        :has-next="data.pagination.hasNext"
        :has-prev="data.pagination.hasPrev"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>
```

**Key Concepts**:
- Query parameters for pagination state
- Reusable pagination component
- Component events
- URL state management
- Server-side pagination

**Success Criteria**: Navigate through pages with URL updates and proper data loading

---

## Tailwind CSS Quick Reference

This project uses Tailwind CSS for styling. Here are some commonly used classes:

**Layout**:
- `flex`, `flex-col`, `grid`, `grid-cols-3`
- `items-center`, `justify-between`, `gap-4`
- `container`, `mx-auto`

**Spacing**:
- `p-4`, `px-6`, `py-2` (padding)
- `m-4`, `mx-auto`, `mt-2` (margin)
- `space-x-4`, `gap-2` (spacing between children)

**Sizing**:
- `w-full`, `h-screen`, `max-w-md`
- `min-h-screen`, `min-w-0`

**Colors**:
- `bg-blue-500`, `text-white`
- `border-gray-300`
- `hover:bg-blue-700`

**Typography**:
- `text-xl`, `text-2xl`, `font-bold`
- `underline`, `uppercase`

**Borders & Shadows**:
- `border`, `rounded`, `rounded-lg`
- `shadow`, `shadow-md`, `shadow-lg`

**Responsive**:
- `sm:text-lg`, `md:grid-cols-2`, `lg:flex`

**Dark Mode**:
- `dark:bg-gray-800`, `dark:text-white`

---

## Useful Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Type Checking
npm run typecheck        # Check TypeScript errors

# Testing
npm run test             # Run Vitest unit tests
npm run test:watch       # Run tests in watch mode
npm run test:e2e         # Run Playwright E2E tests
npm run test:e2e:ui      # Run Playwright with UI

# Linting (if configured)
npm run lint             # Check for code issues
npm run lint:fix         # Auto-fix code issues
```

---

## Tips for Learning

- **Use the browser's Developer Tools** to debug - especially the Console and Network tabs
- **Read error messages carefully** - they usually tell you exactly what's wrong
- **Don't be afraid to experiment and break things** - that's how you learn!
- **Use `console.log()` liberally** to understand what's happening in your code
- **Ask questions and look things up** - that's what professional developers do!
- **Start with small changes** - don't try to build everything at once
- **Test frequently** - run your code often to catch errors early
- **Read the documentation**:
  - [Vue.js Docs](https://vuejs.org)
  - [Nuxt.js Docs](https://nuxt.com)
  - [Tailwind CSS Docs](https://tailwindcss.com)

---

## Progression Path

We recommend completing the tasks in order:

1. **Start with Beginner Tasks (1-4)** - Build your foundation
2. **Move to Intermediate Tasks (5-10)** - Expand your knowledge
3. **Tackle Advanced Tasks (11-16)** - Learn professional patterns
4. **Polish with UI/UX Tasks (17-20)** - Make it look great
5. **Build Real Projects (21-24)** - Put it all together

Don't rush! Take time to understand each concept before moving on. It's better to deeply understand the basics than to superficially know advanced topics.

---

## Getting Help

If you get stuck:

1. **Check the error message** - it often tells you exactly what's wrong
2. **Use console.log()** - print values to see what's happening
3. **Check the browser DevTools** - look at the Console and Network tabs
4. **Read the documentation** - official docs are your best friend
5. **Search online** - someone has probably had the same issue
6. **Ask your colleagues** - we're all learning together!

---

## Next Steps

After completing these tasks, you'll have a solid foundation in:
- Vue.js and Nuxt.js fundamentals
- Modern JavaScript/TypeScript
- API development
- State management
- Testing
- UI/UX best practices

Consider building your own project to practice these skills, such as:
- A personal blog
- A project management tool
- An inventory system
- A recipe app
- A fitness tracker

The best way to cement your learning is to build something you're interested in!

---

Happy coding! 🎉 Remember, every expert was once a beginner. Keep practicing, stay curious, and enjoy the journey!
