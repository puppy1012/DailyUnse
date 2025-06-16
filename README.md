
---

## 🚀 Development Ports

Each app runs on its own port for development via local dev server:

| Package             | Path                        | Port |
|---------------------|-----------------------------|------|
| Authentication      | `/packages/authentication`  | 3001 |
| Navigation Bar      | `/packages/navigation-bar`  | 3002 |
| Weather Forecast    | `/packages/weather-forecast`| 3003 |

---

## 📐 Tech Stack

- **Lerna**: Monorepo management
- **React**: UI development
- **Module Federation**: Micro-frontend architecture (e.g., using Rspack / Webpack)
- **NPM Workspaces**: Dependency sharing & local linking
- **Cross-env**: Environment variable management across OS

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
