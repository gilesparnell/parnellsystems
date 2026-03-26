import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // TODO: Wire up to form service (Formspree / EmailJS / Lead Connector)
    console.log("Contact form submission:", data);
    setSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <FadeIn>
            <SectionLabel>Get in touch</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-balance">
              Prefer to send a message?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
              Not ready to book a call? No problem — send a message and I'll get
              back to you within 24 hours.
            </p>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div className="mt-10 flex flex-col items-center gap-4">
                <CheckCircle className="h-12 w-12 text-accent" />
                <p className="text-lg font-medium">
                  Thanks — I'll be in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Send another message
                </button>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.15}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-5 text-left"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className="mt-1.5"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className="mt-1.5"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can I help?"
                    rows={5}
                    {...register("message")}
                    className="mt-1.5"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  Send message
                </Button>
              </form>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};
