import type { PageProps } from '../../..';
import Modal from '../../Modal/Modal';
import ContactForm from './ContactForm';
import { useState } from 'react';

export default function Contact({
  setTitle,
}: {
  setTitle: PageProps;
}): React.JSX.Element {
  setTitle('Contact');
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className='page-cont items-center gap-4 xl:mx-15 mx-10 lg:my-16 md:my-12 my-10'>
      <div>
        <h1 className='lg:text-6xl text-5xl font-bold mb-0.5'>
          Want to get in touch?
        </h1>
        <h3 className='medium-h'>
          Just fill out the form below to send me an email! I will contact you
          as soon as possible :{')'}
        </h3>
      </div>
      {showModal ? (
        <Modal setShowModal={setShowModal} />
      ) : (
        <ContactForm setShowModal={setShowModal} />
      )}
    </div>
  );
}
