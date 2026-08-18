"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { trackFormSuccess, trackLead } from "@/lib/gtm";

export default function ContactForm({ contact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: contact?.form?.service_options?.[0] || "Custom Web Application",
    budget: contact?.form?.budget_options?.[0] || "Starter Setup",
    message: "",
  });

  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Trigger GTM conversion events only on verified backend success
        trackFormSuccess({ form_id: "contact_inquiry_form" });
        trackLead({ service_type: formData.service, budget_category: formData.budget });
      }

      // Format WhatsApp Message
      const waNumber = (contact?.whatsapp || "9116172700").replace(/[^0-9]/g, "");
      const fullWaNumber = waNumber.length === 10 ? `91${waNumber}` : waNumber;

      const waMessage = `🔥 *New Project Inquiry for MMT*
--------------------------------
👤 *Client Name:* ${formData.name}
✉️ *Email:* ${formData.email}
📱 *Phone / WA:* ${formData.phone || "Not provided"}
🏢 *Company:* ${formData.company || "Not provided"}
🛠️ *Service:* ${formData.service}
💰 *Estimated Budget:* ${formData.budget}

📝 *Project Overview & Goals:*
${formData.message}
--------------------------------
_Inquiry ID: ${data?.inquiryId || "WEB-LEAD"}_`;

      const waUrl = `https://wa.me/${fullWaNumber}?text=${encodeURIComponent(waMessage)}`;

      // Open WhatsApp directly in a new tab/window
      try {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      } catch (e) {
        // In case popup blocker was triggered
      }

      setStatus({
        type: "success",
        message: "Inquiry recorded! WhatsApp chat has been opened to send your brief directly to our technical team.",
        waUrl: waUrl,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: contact?.form?.service_options?.[0] || "Custom Web Application",
        budget: contact?.form?.budget_options?.[0] || "< $1,000 / ₹75k (Starter Setup)",
        message: "",
      });
    } catch (err) {
      // Fallback: Still open WhatsApp even if network request had issues
      const waNumber = (contact?.whatsapp || "9116172700").replace(/[^0-9]/g, "");
      const fullWaNumber = waNumber.length === 10 ? `91${waNumber}` : waNumber;
      const waMessage = `🔥 *New Project Inquiry for MMT*
--------------------------------
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || "N/A"}
🛠️ *Service:* ${formData.service}
💰 *Budget:* ${formData.budget}
📝 *Message:* ${formData.message}`;

      const waUrl = `https://wa.me/${fullWaNumber}?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");

      setStatus({
        type: "success",
        message: "Opening WhatsApp chat to connect with our technical team directly.",
        waUrl: waUrl,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="glass" className="border border-blue-200/90 shadow-blue-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {contact?.form?.title || "Send Us a Project Inquiry"}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {contact?.form?.subtitle ||
            "Fill in your requirements below to instantly route your brief to our technical lead via WhatsApp."}
        </p>
      </div>

      {status.type === "success" && (
        <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm space-y-3 animate-in fade-in duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-base">Inquiry Prepared & Saved!</div>
              <div className="text-xs text-emerald-700 mt-0.5">{status.message}</div>
            </div>
          </div>

          {status.waUrl && (
            <div className="pt-2">
              <a
                href={status.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>💬 Open in WhatsApp Chat Now</span>
              </a>
            </div>
          )}
        </div>
      )}

      {status.type === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 animate-in fade-in duration-300">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Form Submission Error</div>
            <div className="text-xs text-red-700 mt-0.5">{status.message}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Smith"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@company.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Company / Brand
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Corporation"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Service & Budget Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Service Required
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all cursor-pointer"
            >
              {contact?.form?.service_options?.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Estimated Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all cursor-pointer"
            >
              {contact?.form?.budget_options?.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Project Overview & Goals <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, timeline, current bottlenecks, and goals..."
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Inquiry...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                {contact?.form?.submit_button_text || "Submit Project Brief"}
              </span>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
