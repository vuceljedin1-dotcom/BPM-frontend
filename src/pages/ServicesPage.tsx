import ServiceList from '../components/Services/ServiceList';

const ServicesPage = () => {
  return (
    <div className="fade-in" style={{maxWidth: '900px', margin: '2rem auto', display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center'}}>
      <ServiceList />
    </div>
  );
};

export default ServicesPage;
