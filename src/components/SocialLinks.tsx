import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Bboyy99",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/brandon-chagnon-3b975a178",
      icon: FaLinkedin,
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          aria-label={social.name}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
} 