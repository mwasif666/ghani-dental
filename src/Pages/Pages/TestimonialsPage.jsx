import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import { GdTestimonialsSection } from '../../Components/HomeClone/HomeCloneSections';

const headingData = {
  title: 'Testimonials',
};

const TestimonialsPage = () => {
  return (
    <div className="gd_testimonials_page">
      <Section
        className={'cs_page_heading cs_service_inner_banner cs_bg_filed cs_center'}
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80"
      >
        <PageHeading data={headingData} />
      </Section>
      <GdTestimonialsSection />
    </div>
  );
};

export default TestimonialsPage;
