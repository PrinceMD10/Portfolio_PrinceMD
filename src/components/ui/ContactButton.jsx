import React from 'react';

const ContactButton = ({ href, icon: Icon, label, bgColor }) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 ${bgColor} text-white px-8 py-4 rounded-full transition-colors`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </a>
  );
};

export default ContactButton;