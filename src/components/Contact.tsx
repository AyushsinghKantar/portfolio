'use client'
import * as motion from "framer-motion/client"
import { Mail, Linkedin, Github, X } from 'lucide-react';
import {z} from 'zod'
import emailjs from '@emailjs/browser';
const userSchema = z.object({
  name: z.string(),
  email_from: z.string(),
  message: z.string(),
})
export default function Contact() {
  function formAction(formData: FormData) {
    const formValues = Object.fromEntries(formData)
    const result = userSchema.safeParse(formValues)
    if (!result.success) {
      return;
    }
    console.log(result)
    const templateParams = {
      name: result.data.name,
      message: result.data.message,
      email_from: result.data.email_from,
    };
   console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
    emailjs
      .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, templateParams, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12 text-primary-600">
            <Mail className="w-8 h-8 text-primary-600" />
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-slate-800">Let&apos;s Connect</h3>
              <p className="text-lg text-slate-600">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ajmal-ali10"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors border border-slate-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/AjmalAli10"
                  aria-label="Github"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-black hover:bg-primary-50 transition-colors border border-slate-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/softEng_ajmal"
                  aria-label="X"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-black hover:bg-primary-50 transition-colors border border-slate-200"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.form
             id='formId'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
              action={formAction}
            >
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
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}