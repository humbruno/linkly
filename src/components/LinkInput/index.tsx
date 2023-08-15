import React from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';

const LinkInput = () => {
  return (
    <>
      <section className="mt-14">
        <form className="mx-auto flex max-w-2xl justify-between gap-2 rounded-full border-4 border-solid border-[#353C4A] bg-brand-secondary p-1">
          <input
            className="flex-1 rounded-l-full bg-brand-secondary bg-[url('/link-icon.png')] bg-[calc(25px)] bg-no-repeat pl-16 text-base font-light text-brand-lite caret-brand-accent-primary outline-none"
            type="text"
            placeholder="Paste your link here"
          />
          <Button type="submit">Shorten Now!</Button>
        </form>
      </section>
      <section className="mt-8 flex justify-center">
        <Checkbox label="Copy Result to Clipboard" />
      </section>
    </>
  );
};

export default LinkInput;
