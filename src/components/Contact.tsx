import { Mail, Linkedin, Github, FileText, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Get In Touch
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Let's Connect
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Open to AI/ML opportunities, research collaborations, and challenging projects. 
              Available for remote positions globally.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:shivam01511@gmail.com"
              className="card-premium p-6 flex items-center gap-5 group"
            >
              <div className="icon-container w-16 h-16">
                <Mail className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">Email</h4>
                <p className="text-muted-foreground text-sm">shivam01511@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/leaderrr-shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium p-6 flex items-center gap-5 group"
            >
              <div className="icon-container w-16 h-16">
                <Linkedin className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">LinkedIn</h4>
                <p className="text-muted-foreground text-sm">Professional Network</p>
              </div>
            </a>

            <a
              href="https://github.com/leaderrr-shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium p-6 flex items-center gap-5 group"
            >
              <div className="icon-container w-16 h-16">
                <Github className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">GitHub</h4>
                <p className="text-muted-foreground text-sm">Code & Projects</p>
              </div>
            </a>

            <a
              href="/Shivam_Singh_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="card-premium p-6 flex items-center gap-5 group"
            >
              <div className="icon-container w-16 h-16">
                <FileText className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">Resume</h4>
                <p className="text-muted-foreground text-sm">Download PDF</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full floating-badge">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Rewa, Madhya Pradesh, India · Remote-ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
