import React from "react";
import {
  Shield,
  User,
  Database,
  Share2,
  Lock,
  UserCheck,
  Baby,
  FileText,
  Mail,
  Eye,
  Settings,
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  content: string | string[];
  icon: React.ReactNode;
  highlight?: boolean;
}

const PrivacyPolicy: React.FC = () => {
  const sections: PolicySection[] = [
    {
      id: "who-we-are",
      title: "Who We Are",
      content:
        "At Digically.in, founded by Rinal Siddhpura, we help brands grow online—by doing it right, respecting your data, and staying transparent along the way.",
      icon: <User className="w-6 h-6" />,
      highlight: true,
    },
    {
      id: "what-we-collect",
      title: "What We Collect",
      content: [
        "Personal Info: Name, email, company—when you reach out or register.",
        "Usage Data: How you interact with our site.",
        "Cookies & Tracking: Standard tools enhance your experience and our insights.",
      ],
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: "how-we-use",
      title: "How We Use Your Data",
      content: [
        "Custom services and support",
        "Personalized marketing (with your consent)",
        "Internal insights to improve our services",
      ],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: "how-we-share",
      title: "How We Share Your Data",
      content: [
        "We won't sell your personal info. We may share with:",
        "Service providers (e.g., hosting, payment processors)",
        "Legal authorities, when required by law",
      ],
      icon: <Share2 className="w-6 h-6" />,
    },
    {
      id: "security",
      title: "Security Measures",
      content:
        "We use industry-standard practices to protect your data—from SSL encryption to strict access controls.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: [
        "Depending on where you are:",
        "Access, correct, or delete your data",
        "Opt out of promotional emails",
        "Ask to withdraw consent. Just get in touch and we'll help",
      ],
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content:
        "Our service is for users aged 18+. We do not knowingly collect data from minors.",
      icon: <Baby className="w-6 h-6" />,
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      content:
        "Policy may change over time. We'll notify you of major updates and always post the current version.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: "contact",
      title: "Contact for Privacy Matters",
      content:
        "Questions or requests? Reach us via the contact form or email on Digically.in.",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  const renderContent = (content: string | string[], sectionId: string) => {
    if (typeof content === "string") {
      return <p className="text-gray-700 leading-relaxed">{content}</p>;
    }

    if (sectionId === "how-we-use") {
      return (
        <div className="space-y-3">
          <p className="text-gray-700 mb-3">To deliver:</p>
          <ul className="space-y-2">
            {content.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {content.map((item, index) => (
          <div key={index} className="flex items-start space-x-2">
            {index === 0 &&
            (sectionId === "how-we-share" || sectionId === "your-rights") ? (
              <p className="text-gray-700 font-medium mb-2">{item}</p>
            ) : (
              <>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{item}</span>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Privacy Protection</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 ${
                section.highlight
                  ? "border-purple-200 bg-gradient-to-r from-purple-50 to-purple-50"
                  : "border-gray-100"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${
                        section.highlight
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : "bg-gradient-to-r from-blue-500 to-indigo-600"
                      }`}
                    >
                      {section.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full ${
                          section.highlight
                            ? "bg-purple-100 text-purple-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    {renderContent(section.content, section.id)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Features Highlight */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
            <p className="text-sm text-gray-600">
              Clear about what data we collect and how we use it.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
            <p className="text-sm text-gray-600">
              Industry-standard protection for your personal information.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Your Control</h3>
            <p className="text-sm text-gray-600">
              Easy access to manage, update, or delete your data.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Digically.in
              </span>
            </div>
            <p className="text-gray-600 mb-2">
              Founded by{" "}
              <span className="font-semibold text-gray-800">
                Rinal Siddhpura
              </span>
            </p>
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              This privacy policy is effective immediately and applies to all
              users of our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
