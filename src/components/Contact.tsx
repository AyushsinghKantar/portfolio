'use client';
import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, X } from 'lucide-react';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email_from: z.string().min(1, { message: "Email is required." }),
  message: z.string().min(1, { message: "Message is required." })
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Ensure component only fully renders on the client
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  async function formAction(formData: FormData) {
    const formValues = Object.fromEntries(formData);
    const result = userSchema.safeParse(formValues);

    if (!result.success) {
      toast.error('Please fill in all fields correctly.', {
        duration: 1000,
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
      return;
    }

    const templateParams = {
      name: result.data.name,
      message: result.data.message,
      email_from: result.data.email_from,
    };

    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string }
      )
      .then(
        () => {
          toast.success(
            'Thank you for reaching out! Your message has been received, and I’ll respond as soon as possible.',
            {
              duration: 2000,
              style: {
                background: '#10B981',
                color: '#fff',
              },
            }
          );
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error('Failed to send message. Please try again.', {
            duration: 2000,
            style: {
              background: '#EF4444',
              color: '#fff',
            },
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formAction(formData);
  };

  if (!hasHydrated) {
    // Prevents server-rendering until component has fully hydrated on client
    return null;
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12 text-primary-600">
            <Mail className="w-8 h-8 text-primary-600" />
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800">Let&apos;s Connect</h3>
              <p className="text-lg text-slate-600">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ajmal-ali10"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors border border-slate-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/AjmalAli10"
                  aria-label="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-black hover:bg-primary-50 transition-colors border border-slate-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/softEng_ajmal"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-black hover:bg-primary-50 transition-colors border border-slate-200"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email_from"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
