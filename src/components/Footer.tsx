import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 border-t border-border/30 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[150px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-display font-bold text-lg mb-1">
                <span className="text-gradient-warm">S</span>hivam Singh
              </p>
              <p className="text-sm text-muted-foreground">
                AI Engineer | Machine Learning Professional
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/leaderrr-shivam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 border border-border/30"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/leaderrr-shivam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 border border-border/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:shivam01511@gmail.com"
                className="w-11 h-11 rounded-xl bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 border border-border/30"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground/60">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
