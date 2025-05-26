import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto py-32 bg-amber-100/50 dark:bg-neutral-900/60 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-3xl font-bold mb-8 break-words">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto break-words">
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 justify-center items-center w-full">
          <Card className="border-amber-200 bg-amber-50/50 dark:border-neutral-800 dark:bg-neutral-900/40 w-full break-words">
            <CardContent className="pt-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">habibelias234@gmail.com</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50/50 dark:border-neutral-800 dark:bg-neutral-900/40 w-full break-words">
            <CardContent className="pt-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+251 94 082 7141</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50/50 dark:border-neutral-800 dark:bg-neutral-900/40 w-full break-words">
            <CardContent className="pt-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50/50 dark:border-neutral-800 dark:bg-neutral-900/40 w-full break-words">
            <CardContent className="pt-6 text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@habib_elias</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full break-words">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-amber-700 hover:bg-amber-800 text-amber-50"
          >
            <a href="mailto:habibelias234@gmail.com">
              <Mail className="w-4 h-4" />
              Send Message
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-amber-600 text-amber-700 hover:bg-amber-100"
          >
            <a
              href="https://www.linkedin.com/in/habib-elias-77a8b1352"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-amber-600 text-amber-700 hover:bg-amber-100"
          >
            <a
              href="https://github.com/HabibElias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-amber-600 text-amber-700 hover:bg-amber-100"
          >
            <a
              href="https://t.me/habib_elias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
