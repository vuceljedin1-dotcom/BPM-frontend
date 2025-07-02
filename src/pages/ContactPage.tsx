import ContactForm from '../components/Contact/ContactForm';
import ContactMap from '../components/Contact/ContactMap';

const ContactPage = () => {
  return (
    <div className="fade-in contact-page">
      <div className="contact-container">
        <ContactForm />
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;