import { MailIcon } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-white py-18 px-4 sm:px-6 lg:px-8 rounded-3xl mx-auto shadow-xs mt-32 mb-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="size-16 bg-white rounded-xl flex-center mx-auto">
          <MailIcon className="size-8 text-app-green" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-semibold text-app-green mb-4">
          Subscribe to our Newsletter
        </h2>
        <p>
          Get weekly update about our products and discount from your inbox
          right now by subscription
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 w-full px-5 py-3.5 rounded-xl border border-app-border focus:border-app-green focus:ring bg-white text-sm transition-all"
          />
          <button
            type="submit"
            className="px-8 w-full mt-8 py-3.5 bg-app-orange-dark text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors shadow-sm whitespace-nowrap active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
