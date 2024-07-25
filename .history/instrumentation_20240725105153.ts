import { registerOTel } from "@vercel/otel"

export function register() {
  registerOTel("gestion-arretes-app-production")
}
