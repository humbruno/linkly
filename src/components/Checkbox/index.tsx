import { type PropsWithChildren } from 'react';

type Props = {
  label: string;
};

const Checkbox = ({ label, children }: PropsWithChildren<Props>) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id="checked-checkbox"
        type="checkbox"
        className="focus:ring-blue-500 ring-offset-gray-800 h-4 w-4 cursor-pointer rounded accent-brand-accent-primary focus:ring-2"
      />
      <label
        htmlFor="checked-checkbox"
        className="cursor-pointer text-sm font-light text-brand-lite"
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
