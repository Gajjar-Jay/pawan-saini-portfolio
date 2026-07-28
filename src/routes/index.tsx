import { createFileRoute } from "@tanstack/react-router";
import portfolioHtml from "../portfolio.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(portfolioHtml, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
          },
        }),
    },
  },
});
