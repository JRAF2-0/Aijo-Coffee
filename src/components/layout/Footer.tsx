import { Coffee } from "lucide-react";
import { siteConfig, navLinks } from "../../data/siteConfig";

// Custom social icons
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8a4 4 0 0 1 3.37 3.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 text-white mb-3">
            <Coffee size={22} />
            <span className="text-lg font-semibold">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-neutral-500">{siteConfig.tagline}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h4 className="text-white font-medium mb-4">Get in Touch</h4>
          <p className="text-sm mb-1">{siteConfig.email}</p>
          <p className="text-sm mb-4">{siteConfig.phone}</p>

          <div className="flex gap-4 items-center">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-400 transition-colors"
            >
              <FacebookIcon size={20} />
            </a>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-400 transition-colors"
            >
              <InstagramIcon size={20} />
            </a>

            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-amber-400 transition-colors text-sm font-semibold border border-current rounded px-1.5"
            >
              Tk
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-neutral-800 mt-10 pt-6 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}