import React from "react";
import {
  Shield,
  FileText,
  Users,
  CreditCard,
  Lock,
  AlertCircle,
  Scale,
  Mail,
  ArrowRight,
} from "lucide-react";

interface TermSection {
  id: string;
  title: string;
  content: string | string[];
  icon: React.ReactNode;
}

const TermsAndConditions: React.FC = () => {
  const sections: TermSection[] = [
    {
      id: "welcome",
      title: "Welcome Onboard",
      content:
        'By using Digically.in (referred to as "we", "us", or "our"), you agree to these terms. If you\'re unsure about any part, please reach out—happy to clarify!',
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "services",
      title: "Our Services",
      content:
        "Digically helps businesses and personal brands scale online through services like development, design, marketing, social media, e-commerce, and support.",
      icon: <ArrowRight className="w-6 h-6" />,
    },
    {
      id: "using-services",
      title: "Using the Services",
      content: [
        "Use our services responsibly and legally.",
        "Disable any ad blockers or browser extensions that interfere with functionality.",
        "Respect intellectual property—no unauthorized copying.",
      ],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: "responsibilities",
      title: "Your Responsibilities",
      content: [
        "Providing accurate info.",
        "Keeping your login credentials secure.",
        "Ensuring you have the right to use materials you upload (e.g., images, text).",
      ],
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: "payments",
      title: "Payments & Fees",
      content:
        "Fees, billing cycles, and payment methods are specified at the time of purchase. Late payments may result in suspension of services.",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content:
        "All original content, branding, and software we create belong to Digically unless explicitly agreed otherwise. You retain ownership of your own content.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      content:
        "We care about your privacy—check our Privacy Policy below to understand how we collect, use, and protect your data.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content:
        "While we strive for excellence, we can't guarantee perfection. We're not liable for indirect losses or damages (e.g., lost profits).",
      icon: <AlertCircle className="w-6 h-6" />,
    },
    {
      id: "modifications",
      title: "Modifications",
      content:
        "We may update these terms—current version will always be posted. Continued use means you accept any changes.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: "termination",
      title: "Termination",
      content:
        "We may suspend or terminate access for violation of terms or for other legitimate reasons. You may also terminate your use by contacting us—but prior payments aren't refundable unless noted.",
      icon: <AlertCircle className="w-6 h-6" />,
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content:
        "These terms are governed by applicable Indian law—any disputes fall under the jurisdiction of the appropriate courts.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      id: "contact",
      title: "Contact Us",
      content:
        "Questions? Suggestions? Just want to say hi? Reach out at the contact details or form available on Digically.in.",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  const renderContent = (content: string | string[]) => {
    if (typeof content === "string") {
      return <p className="text-gray-700 leading-relaxed">{content}</p>;
    }

    return (
      <div className="space-y-2">
        <p className="text-gray-700 mb-2">You&apos;re responsible for:</p>
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clear, straightforward terms for using Digically&apos;s services
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {section.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full">
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    {renderContent(section.content)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Digically.in
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              These terms are effective immediately and apply to all users of
              our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
