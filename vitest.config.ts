import { defineConfig } from "vitest/config";

// node by default; DOM tests opt in per file with // @vitest-environment jsdom.
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "tests/**/*.test.ts"],
    mockReset: true,
  },
});

# Automated fix for issue #1592: [bug] Push mode hides the whole card section, so Import card… and the greeting fields are unreachable
