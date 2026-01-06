import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div>
            <Link href="/" className="text-3xl font-bold font-serif text-white tracking-tighter mb-4 block">
              Daily<span className="text-red-600">News</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Leading online news portal of Bangladesh. Updating 24/7 with latest news of politics, economy, sports, and entertainment.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Youtube} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-l-4 border-red-600 pl-3">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link href="/advertise" className="hover:text-red-500 transition">Advertise</Link></li>
              <li><Link href="/terms" className="hover:text-red-500 transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-red-500 transition">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-l-4 border-red-600 pl-3">
              Sections
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/category/national" className="hover:text-red-500 transition">National</Link></li>
              <li><Link href="/category/international" className="hover:text-red-500 transition">International</Link></li>
              <li><Link href="/category/sports" className="hover:text-red-500 transition">Sports</Link></li>
              <li><Link href="/category/entertainment" className="hover:text-red-500 transition">Entertainment</Link></li>
              <li><Link href="/category/technology" className="hover:text-red-500 transition">Technology</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 border-l-4 border-red-600 pl-3">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span>1234 News Tower, Karwan Bazar, Dhaka-1215, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span>editor@dailynews.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Daily News. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Editor & Publisher: Mahin Khan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Small helper social icons
function SocialIcon({ Icon }) {
  return (
    <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300">
      <Icon className="w-5 h-5" />
    </Link>
  );
}
