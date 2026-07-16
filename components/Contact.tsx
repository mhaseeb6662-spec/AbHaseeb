"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";
import { Button } from "./ui/Button";
import { siteConfig } from "@/lib/data";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FaPhone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: FaMapMarkerAlt, label: "Location", value: siteConfig.location, href: siteConfig.locationMapUrl },
];

type SubmitStatus = { type: "success" | "error" | null; message: string };

const inputClasses =
  "w-full rounded-xl border border-line bg-surface-2/70 px-4 py-3 text-paper placeholder:text-muted outline-none backdrop-blur-sm transition-all focus:border-cyan focus:ring-1 focus:ring-cyan";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: "" });

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "Enter a valid email address.";
    if (formData.phone && !/^[0-9+\-()\s]{7,20}$/.test(formData.phone))
      next.phone = "Enter a valid phone number.";
    if (!formData.subject.trim()) next.subject = "Please add a subject.";
    if (formData.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });
    if (!validate()) return;

    setIsLoading(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[220px] w-[220px] rounded-full bg-cyan/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <RevealOnScroll className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mb-4 mt-3 font-display text-3xl font-semibold sm:mb-6 sm:mt-4 sm:text-4xl md:text-5xl">
            Let&apos;s build <span className="text-gradient font-normal italic">something great</span>
          </h2>
          <p className="text-sm text-paper-dim sm:text-base">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
            discuss how we can work together.
          </p>
        </RevealOnScroll>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll delay={0.1}>
            <div className="card-premium h-full p-5 sm:p-6 md:p-8">
              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                    />
                    {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                    />
                    {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone Number <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+92 3XX XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-danger">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputClasses}
                    />
                    {errors.subject && <p className="mt-1 text-xs text-danger">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-danger">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="h-4 w-4" />
                    </>
                  )}
                </Button>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 rounded-xl p-3 sm:p-4 ${
                      submitStatus.type === "success"
                        ? "border border-emerald/20 bg-emerald/10 text-emerald"
                        : "border border-danger/20 bg-danger/10 text-danger"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <FaCheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <FaExclamationCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="space-y-5 sm:space-y-6">
            <div className="card-premium p-5 sm:p-6 md:p-8">
              <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">Contact Information</h3>
              <div className="space-y-2 sm:space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    data-cursor-hover
                    className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-surface-2/70 sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal/20 to-cyan/10 transition-colors group-hover:from-royal/30 group-hover:to-cyan/20 sm:h-11 sm:w-11">
                      <item.icon className="h-4 w-4 text-cyan" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] uppercase tracking-wide text-muted sm:text-xs">
                        {item.label}
                      </div>
                      <div className="truncate text-sm font-medium sm:text-base">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-premium p-5 sm:p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="animate-pulse-dot h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald" />
                <span className="text-sm font-medium sm:text-base">Currently Available</span>
              </div>
              <p className="text-sm text-paper-dim">
                I&apos;m currently open to new opportunities and exciting projects. Whether you
                need a full-time engineer or a freelance consultant, let&apos;s talk!
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};