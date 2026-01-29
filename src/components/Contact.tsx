import { Mail, Linkedin, Github, FileText, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
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
              href="mailto:shivam.singh@example.com"
              className="gradient-border card-glow p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">shivam.singh@example.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border card-glow p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <p className="text-muted-foreground text-sm">Professional Network</p>
              </div>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border card-glow p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">GitHub</h4>
                <p className="text-muted-foreground text-sm">Code & Projects</p>
              </div>
            </a>

            <a
              href="#"
              className="gradient-border card-glow p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Resume</h4>
                <p className="text-muted-foreground text-sm">Download PDF</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
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
