import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">ATELIER</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting unique editorial fashion pieces that challenge conventions and inspire creativity.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              For inquiries: contact@atelier-fashion.com
            </p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} ATELIER. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}