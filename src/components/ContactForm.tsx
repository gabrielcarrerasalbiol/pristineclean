"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      inquiryType: (form.elements.namedItem("inquiryType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-[#1e3a5f]">
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-gray-600">
          Thank you for reaching out. Jenny will get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-sport-accent focus:outline-none focus:ring-1 focus:ring-sport-accent"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-sport-accent focus:outline-none focus:ring-1 focus:ring-sport-accent"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-sport-accent focus:outline-none focus:ring-1 focus:ring-sport-accent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-sport-accent focus:outline-none focus:ring-1 focus:ring-sport-accent"
          placeholder="07796 001211"
        />
      </div>

      <div>
        <label
          htmlFor="inquiryType"
          className="block text-sm font-medium text-gray-700"
        >
          Service Interest *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 shadow-sm transition-colors focus:border-sport-accent focus:outline-none focus:ring-1 focus:ring-sport-accent"
        >
          <option value="">Select a service</option>
          <option value="sports-massage">Sports and Remedial Massage</option>
          <option value="fascial-manipulation">
            Fascial Manipulation Techniques
          </option>
          <option value="pre-post-event">Pre and Post Event Massage</option>
          <option value="injury-assessment">
            Injury Assessment and Management
          </option>
          <option value="rehab-programming">
            Individual Rehabilitation Programming
          </option>
          <option value="prehab-screening">
            Preventative Rehabilitation Screening
          </option>
          <option value="postural-analysis">Postural Analysis</option>
          <option value="stretching-exercise">
            Stretching and Exercise Programming
          </option>
          <option value="strapping-taping">Strapping and Taping</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-sport-accent focus:outline-none focus:ring-1 focus:ring-sport-accent"
          placeholder="Tell me about your injury or how I can help..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full bg-sport-accent hover:bg-orange-600"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
