import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Required for Hostinger Node.js deployment — produces a self-contained
    // server bundle under .next/standalone that Hostinger can run directly.
    output: "standalone",

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    // ── HTTPS enforcement ──────────────────────────────────────────────────
                    // Tells browsers to ONLY connect via HTTPS for the next 2 years.
                    // preload: opts into browser HSTS preload lists (Chrome, Firefox, etc.)
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=94608000; includeSubDomains; preload",
                    },

                    // ── Clickjacking protection ────────────────────────────────────────────
                    // Prevents your page from being embedded in a malicious <iframe>.
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },

                    // ── MIME-type sniffing protection ──────────────────────────────────────
                    // Stops browsers from guessing a file's content type, preventing
                    // certain drive-by download / script-injection attacks.
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },

                    // ── Legacy XSS filter (older browsers) ────────────────────────────────
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },

                    // ── Referrer policy ────────────────────────────────────────────────────
                    // Sends full URL only for same-origin requests; only the origin
                    // (no path/query) for cross-origin HTTPS. Nothing for HTTP downgrade.
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },

                    // ── Permissions policy ─────────────────────────────────────────────────
                    // Explicitly disables browser features your site does NOT need.
                    // This stops malicious third-party scripts from silently using them.
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
                    },

                    // ── Content Security Policy ────────────────────────────────────────────
                    // The most powerful header. Controls exactly which origins can load
                    // each type of resource. Keeps this tight to prevent XSS and
                    // data-injection attacks.
                    //
                    // 'unsafe-inline' on script-src and style-src is required by Next.js
                    // (inline scripts for hydration, Tailwind inline styles). If you later
                    // add a strict nonce-based CSP, you can remove these.
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval needed by Next.js dev/prod
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' data: blob:",
                            "font-src 'self'",
                            "connect-src 'self'",
                            // Google Maps embed needs this frame origin
                            "frame-src https://www.google.com",
                            "object-src 'none'",  // disables Flash and other plugins
                            "base-uri 'self'",    // prevents base-tag hijacking
                            "form-action 'self'", // restricts where forms can POST
                            "upgrade-insecure-requests", // auto-upgrades HTTP sub-resources to HTTPS
                        ].join("; "),
                    },
                ],
            },
        ];
    },

    // ── Image domains ──────────────────────────────────────────────────────────────
    // Only allow next/image to serve images from your own domain.
    // Add external hostnames here ONLY if you serve images from a CDN.
    images: {
        remotePatterns: [],
    },
};

export default nextConfig;
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
