// =====================================================
// EmailJS Configuration
// Replace placeholders with your actual EmailJS credentials
// from https://dashboard.emailjs.com/
// =====================================================
const EMAILJS_CONFIG = {
  // Public Key found under: Account -> General -> API Keys -> Public Key
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",

  // Service ID found under: Email Services -> Service ID (e.g., service_gmail)
  serviceId: "YOUR_EMAILJS_SERVICE_ID",

  // Template ID found under: Email Templates -> Template ID (e.g., template_portfolio)
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",

  // Destination email address
  recipientEmail: "udayraje.1981@gmail.com"
};

// Global export for script.js
window.EMAILJS_CONFIG = EMAILJS_CONFIG;

