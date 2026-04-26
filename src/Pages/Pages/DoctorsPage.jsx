import PageHeading from '../../Components/PageHeading';
import AppointmentSection from '../../Components/AppointmentSection';
import Section from '../../Components/Section';

const headingData = {
  title: 'Our Doctors',
};

const appointmentSectionData = {
  subtitle: 'OUR TEAM MEMBER',
  title: 'Meet Our Specialist This<br> Doctor Meeting',
  doctorsData: [
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_1.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_4.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_3.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_4.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_5.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_6.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_7.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
    {
      name: 'Dr. Norma Pedric',
      specialty: 'Neurologist',
      imageUrl: '/assets/img/team_8.jpg',
      profileLink: '/doctors/doctor-details',
      iconUrl: 'https://www.facebook.com/',
      iconUrl2: 'https://www.pinterest.com/',
      iconUrl3: 'https://www.twitter.com/',
    },
  ],
};

const DoctorsPage = () => {
  return (
    <>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Appointment Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <AppointmentSection data={appointmentSectionData} />
      </Section>
    </>
  );
};

export default DoctorsPage;
