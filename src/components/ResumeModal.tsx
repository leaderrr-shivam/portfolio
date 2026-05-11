import { FileText, Download, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ResumeModalProps {
  trigger: React.ReactNode;
}

const resumeUrl = `${import.meta.env.BASE_URL}Shivam_Singh_Resume_May_2026.pdf`;

const ResumeModal = ({ trigger }: ResumeModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 gap-0 bg-background border-border/50">
        <DialogHeader className="px-6 py-4 border-b border-border/30 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="icon-container w-10 h-10">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="font-display text-lg">Resume Preview</DialogTitle>
          </div>
          <a
            href={resumeUrl}
            download
            className="btn-primary inline-flex items-center gap-2 text-sm !py-2 !px-4"
          >
            <Download size={14} />
            Download PDF
          </a>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full min-h-[60vh]"
            title="Resume Preview"
            style={{ border: 'none' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
