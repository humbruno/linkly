import React, { type PropsWithChildren } from 'react';

type Props = { type?: 'button' | 'submit' | 'reset' };

const Button = ({ children, type = 'button' }: PropsWithChildren<Props>) => {
  return (
    <button
      className="shadow-3xl rounded-full bg-brand-accent-secondary px-6 py-5 text-base font-medium text-[#ffffff] transition-all duration-150 ease-in-out hover:brightness-110"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
