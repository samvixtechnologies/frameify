import Link from 'next/link';

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-black text-sm text-foreground">FRAMEIFY<span className="text-primary">.</span></span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>

        <div className="flex space-x-4">
          <Link href="#" className="hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></Link>
          <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></Link>
        </div>
      </div>
    </footer>
  );
}
