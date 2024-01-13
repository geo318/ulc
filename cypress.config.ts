import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config): void {},
    env: { ...process.env },
  },
})
