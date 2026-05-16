import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "yashvasiyar12@gmail.com",
        "template_gzhy1kl",
        formData,
        "i-xJaHAEtOuw7UONc"
      );
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "yashvasiyar12@gmail.com",
      link: "mailto:yashvasiyar12@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      label: "Phone",
      value: "+91 9512160995",
      link: "tel:+919512160995",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      label: "Location",
      value: "Gujarat, India",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you. 
              Let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Cards Bento */}
            <div className="lg:col-span-5 grid gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="group flex items-center p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm overflow-hidden relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-purple-400 mr-6 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{info.label}</p>
                        <p className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="group flex items-center p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-orange-400 mr-6 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="relative z-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{info.label}</p>
                        <p className="text-lg font-medium text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <form onSubmit={sendEmail} className="space-y-6 bg-white/[0.02] p-8 md:p-10 rounded-[40px] border border-white/[0.08] backdrop-blur-md relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
                
                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2 relative z-10">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white font-bold text-lg shadow-xl shadow-purple-500/20 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 z-[100] bg-gradient-to-r from-green-500 to-emerald-600 p-1 rounded-2xl shadow-2xl"
          >
            <div className="bg-slate-900 px-6 py-4 rounded-[14px] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <p className="font-bold text-white">Message Sent!</p>
                <p className="text-gray-400 text-sm">I'll get back to you soon.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;