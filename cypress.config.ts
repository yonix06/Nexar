import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: { ...nxE2EPreset(__filename, { cypressDir: 'e2e' }), baseUrl: '127.0.0.1:4000' }
})
