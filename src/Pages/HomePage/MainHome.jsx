import HeroSection from "../../Components/HeroSection";
import CtaSection from "../../Components/CtaSection.jsx";
import About from "../../Components/About/index.jsx";
import CounterSection from "../../Components/FunSection/CounterSection.jsx";
import Service from "../../Components/Service/index.jsx";
import TeamSection from "../../Components/TeamSection/index.jsx";
import BrandsSlider from "../../Components/BrandsSection/index.jsx";
import ChooseUs from "../../Components/ChooseUs/index.jsx";
import ProjectSection from "../../Components/ProjectSection/index.jsx";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1.jsx";
import CtaSection3 from "../../Components/CtaSection.jsx/CtaSection3";
import MedicalTabSection from "../../Components/MedicalTabSection/index.jsx";
import BlogSection from "../../Components/BlogsSection/index.jsx";
import Section from "../../Components/Section/index.jsx";
import ContactSection2 from "../../Components/ContactSection/ContactSection2.jsx";
import MedicalSolution2 from "../../Components/MedicalSolutionSection/MedicalSolution2";
import DentalSolution from "../../Components/DentalSolution";
import TimelineSection from "../../Components/TimelineSection";
import ProjectsSection2 from "../../Components/ProjectSection/ProjectsSection2";
import ProcessSection1 from "../../Components/ProcessSection/ProcessSection1";
import ContactSection from "../../Components/ContactSection";
import LocationMap from "../../Components/LocationMap/Index";
import ServiceSection3 from "../../Components/Service/ServiceSection3";
import HomeCloneSections from "../../Components/HomeClone/HomeCloneSections";
import { FaPhone } from "react-icons/fa6";

const heroData = {
  primarySlider: [
    {
      bgImageUrl:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80",
      title: "Trusted Dentist in Rawalpindi for a Brighter, Healthier Smile",
      contactSubtitle:
        "Searching for a reliable dentist near you in Rawalpindi? We provide comprehensive dental services, from preventive care to cosmetic dentistry. Book your appointment today for expert care and a brighter smile.",
      contactTitle: "Book Your Appointment Today",
      contact: "Call Us: 0333 4425828",
      btnText1: "Book Appointment",
      link: "https://wa.me/923334425828",
      btnText2: "Our Services",
      link2: "/service",
      iconImgUrl: "assets/img/icons/hero_icon.png",
    },
    {
      bgImageUrl:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
      title: "Modern Dentistry for <br>Every <span>Family.</span>",
      contactSubtitle:
        "Searching for a reliable dentist near you in Rawalpindi? We provide comprehensive dental services, from preventive care to cosmetic dentistry. Book your appointment today for expert care and a brighter smile.",
      contactTitle: "Book Your Appointment Today",
      contact: "Call Us: 0333 4425828",
      btnText1: "Book Appointment",
      link: "https://wa.me/923334425828",
      btnText2: "About Us",
      link2: "/about",
      iconImgUrl: "assets/img/icons/hero_icon.png",
    },
  ],
  secondarySlider: [
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  ],
};

const ctaData = {
  imageUrl: "/assets/img/cta_img_1.jpg",
  title: "Meet The Team Support Medical Service.",
  subtitle: "For us, there are no minor aspects, because a quality",
  buttonUrl: "https://wa.me/923334425828",
  buttonText: "Booking Now",
};

const ctaData3 = {
  images: [
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=300&q=80",
      alt: "Dental Checkup",
    },
    {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=300&q=80",
      alt: "Healthy Smile",
    },
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=300&q=80",
      alt: "White Teeth",
    },
  ],
  imageAlt: "Dental Care",
  title: "Meet The Team Support Dental Service.",
  subtitle: "For us, there are no minor aspects, because a quality",
  buttonText: "Booking Now",
  buttonLink: "https://wa.me/923334425828",
};

const aboutData = {
  sectionSubtitle: "About Us",
  sectionTitle:
    "Welcome to Ghani Dental Clinic – Your Family Dentist in Rawalpindi",
  aboutText:
    "At Ghani Dental Care Centre we combine advanced dental technology with genuine compassion and personalized care. Our experienced team delivers gentle, high-quality treatments in a comfortable environment, helping every patient achieve lasting oral health and a confident smile.",
  service:
    "We offer complete dental care for every age and every need, from routine checkups and cleanings to advanced treatments like implants, root canals, whitening and orthodontics.",
  experienceYears: "10+",
  experienceTitle: "Years Of Experience",
  videoUrl:
    "https://www.youtube.com/embed/a2UMhBoKaAM?autoplay=1&controls=1&rel=0&modestbranding=1",
  thumbVideoUrl:
    "https://www.youtube.com/embed/a2UMhBoKaAM?autoplay=1&mute=1&controls=0&loop=1&playlist=a2UMhBoKaAM&rel=0&modestbranding=1",
  videoText: "How We Work",
  iconboxes: [
    {
      imgUrl: "/assets/img/icons/about_icon_1.png",
      title: "10+ Expert Doctors",
      subtitle: "Highly trained specialists for every dental need.",
    },
    {
      imgUrl: "/assets/img/icons/about_icon_2.png",
      title: "50+ Patients Per Day",
      subtitle: "Trusted daily by families across Islamabad.",
    },
  ],

  btnUrl: "/about",
  btnText: "About More",
  sectionImgUrl: "assets/img/about_section_img_1.png",
  headImgUrl: "/assets/img/doctors/docter-at-dental-clinic.png",
};

const homeV3ServiceSectionData = {
  sectionTitle: "Our Comprehensive <span>Dental Services</span>",
  titlePrefix: "Our Comprehensive",
  animatedWords: [
    "Dental Services",
    "Smile Solutions",
    "Oral Treatments",
    "Family Care",
  ],
  sectionSubtitle: "Services",
  description:
    "We offer complete dental care for every age and every smile from routine checkups and cleanings to advanced treatments like root canals, whitening and oral surgery.",
  beforeImage:
    "https://images.unsplash.com/photo-1776400985210-92f654712d30?auto=format&fit=crop&w=900&h=650&rect=0,0,2000,3500&q=80",
  afterImage:
    "https://images.unsplash.com/photo-1776400985210-92f654712d30?auto=format&fit=crop&w=900&h=650&rect=2000,0,2000,3000&q=80",
  beforeAlt: "Before dental smile transformation",
  afterAlt: "After dental smile transformation",
  slides: [
    {
      imageUrl: "/assets/img/services/teeth-white.webp",
      icon: "/assets/img/icons/service_icon_20.png",
      title: "Teeth Whitening",
      subtitle:
        "Safe professional treatment that removes stains and gives you a brighter confident smile.",
      detailsLink: "/service/service-details",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/assets/img/services/root.webp",
      icon: "/assets/img/icons/service_icon_1.png",
      title: "Root Canal",
      subtitle:
        "Gentle pain-less procedure to save your natural tooth and remove deep infection completely.",
      detailsLink: "/service/service-details",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/assets/img/services/implants.webp",
      icon: "/assets/img/icons/service_icon_21.png",
      title: "Teeth Implants",
      subtitle:
        "Permanent natural-looking replacement for missing teeth with strong long-lasting results.",
      detailsLink: "/service/service-details",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/assets/img/services/Orthodontics.webp",
      icon: "/assets/img/icons/service_icon_20.png",
      title: "Orthodontics",
      subtitle:
        "Straighten crooked teeth and improve your bite with modern braces and aligner treatment.",
      detailsLink: "/service/service-details",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/assets/img/services/dental-crown.webp",
      icon: "/assets/img/icons/service_icon_1.png",
      title: "Dental Crown",
      subtitle:
        "Strong protective cover that restores shape function and appearance of damaged teeth.",
      detailsLink: "/service/service-details",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/assets/img/services/Oral-Surgery.webp",
      icon: "/assets/img/icons/service_icon_21.png",
      title: "Oral Surgery",
      subtitle:
        "Expert surgical care for wisdom teeth removal and other complex dental procedures.",
      detailsLink: "/service/service-details",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
  ],
};

const homeV3MedicalSolutionData = {
  subtitle: "WHY CHOOSE US",
  title: "Reason to Choose <br />Ghani Dental Care Center",
  description:
    "At Ghani Dental Care Centre we combine advanced technology with gentle care to deliver exceptional <br /> dental treatments. Our experienced team providespersonalized solutions in a comfortable and hygienic environment.Your healthy confident smile is always our top priority.",
  links: [
    {
      iconSrc: "/assets/img/icons/tab_link_icon_5.png",
      iconAlt: "Expert Specialists",
      text: "Expert Specialists",
      description:
        "Our highly qualified dental surgeons bring years of expertise and advanced training to every patient. With a gentle approach and modern techniques they deliver personalized care you can fully trust.",
    },
    {
      iconSrc: "/assets/img/icons/service_icon_1.png",
      iconAlt: "Modern Technology",
      text: "Modern Technology",
      description:
        "Our clinic is equipped with advanced dental technology and modern equipment for accurate diagnosis and precise treatments. With the latest tools and techniques we deliver safer, faster and more comfortable care.",
    },
    {
      iconSrc: "/assets/img/icons/service_icon_4.png",
      iconAlt: "Comfortable Environment",
      text: "Comfortable Environment",
      description:
        "We have designed a warm and welcoming clinic where you feel relaxed from the moment you arrive. Our friendly staff and soothing atmosphere make every dental visit comfortable and stress-free.",
    },
    {
      iconSrc: "/assets/img/icons/service_icon_6.png",
      iconAlt: "Affordable Pricing",
      text: "Affordable Pricing",
      description:
        "We offer high-quality dental care with clear and transparent pricing. After examination our team provides a detailed treatment plan with exact costs upfront so you know everything in advance.",
    },
    {
      iconSrc: "/assets/img/icons/call_icon_1.png",
      iconAlt: "Emergency Care",
      text: "Emergency Care",
      description:
        "Our experienced team is always ready to handle dental emergencies quickly and effectively. Whether you have severe pain or injury we provide prompt compassionate care to relieve your discomfort fast.",
    },
  ],
  thumbnailSrc: "/assets/img/doctors/whychoose.png",
  thumbnailAlt: "Ghani Dental doctor",
  successRate: {
    value: "99%",
    label: "Success Rate",
  },
};

const homeV3DentalSolutionData = {
  backgroundClass: "cs_blue_bg",
  wrapperClass: "cs_blue_bg",
  subtitle: "OUR SOLUTION DENTAL",
  title: "Your Dental Solution This Provide Service.",
  slides: [
    {
      heading: "Reviews",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands, feel safe and comfortable in establishing.",
      avatarImage: "/assets/img/avatar_1.png",
      avatarAlt: "Avatar",
      avatarName: "Dr. Mehara Bara",
      avatarTitle: "Dental Manager",
      rating: 4,
    },
    {
      heading: "Reviews",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands, feel safe and comfortable in establishing.",
      avatarImage: "/assets/img/avatar_1.png",
      avatarAlt: "Avatar",
      avatarName: "Dr. Mehara Bara",
      avatarTitle: "Dental Manager",
      rating: 2,
    },
    {
      heading: "Reviews",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, dental, and brands, feel safe and comfortable in establishing.",
      avatarImage: "/assets/img/avatar_1.png",
      avatarAlt: "Avatar",
      avatarName: "Dr. Mehara Bara",
      avatarTitle: "Dental Manager",
      rating: 3,
    },
  ],
  shapeImage: "/assets/img/msg_quote_1.png",
};

const homeV3TimeLineData = {
  subtitle: "OUR TIMETABLE",
  title: "Events Calendar Specialist This <br />Timetabel Meet",
  scheduleData: {
    days: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    times: [
      {
        time: "10.00",
        schedules: [
          {
            title: "Pulmonary",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          null,
          {
            title: "Cardiology",
            timeRange: "10.00-11.00",
            doctor: "Laparoscopy",
          },
          null,
          { title: "Pulmonary", timeRange: "10.00-11.00", doctor: "Routine" },
          null,
          { title: "Cardiology", timeRange: "10.00-11.00", doctor: "Runada" },
        ],
      },
      {
        time: "11.00",
        schedules: [
          { title: "Dental", timeRange: "11.00-12.00", doctor: "Dr.Porta" },
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
          {
            title: "Pulmonary",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          null,
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
          {
            title: "Cardiology",
            timeRange: "11.00-12.00",
            doctor: "Randy Nelson",
          },
        ],
      },
    ],
  },
};

const homeV3ProjectSectionData = {
  heading: {
    subtitle: "Portfolio",
    titlePrefix: "Smile Makeovers That",
    animatedWords: ["Change Lives", "Build Confidence", "Create Happy Smiles"],
    title: "Smile Makeovers That <span>Change Lives</span>",
    description:
      "Witness the incredible transformations we create every day. Our expert team delivers personalized dental treatments that restore health, boost confidence, and give patients the beautiful smiles they deserve.",
    buttonText: "View More",
    buttonLink: "/portfolio",
  },
  projects: [
    {
      title: "Dental Basic Checkup",
      subtitle: "Thorough examination and cleaning for optimal oral health.",
      imageUrl:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
      icon: "checkup",
      link: "/portfolio",
    },
    {
      title: "Teeth Whitening",
      subtitle: "Safe professional treatment for a brighter confident smile.",
      imageUrl:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
      icon: "whitening",
      link: "/portfolio",
    },
    {
      title: "Precision Dental Surgery",
      subtitle: "Advanced surgical procedures with expert precision and care.",
      imageUrl:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
      icon: "surgery",
      link: "/portfolio",
    },
  ],
};

const homeV3ProcessData = {
  heading: {
    subtitle: "OUR WORKING PROCESS",
    title: "Meet Our Specialist This <br /> Doctor Meeting",
    variant: "text-center",
  },
  processes: [
    {
      index: "01",
      title: "Service & Check",
      subtitle: "Medical competitor research dental startup to financial",
      icon: "assets/img/icons/process_icon_1.png",
      shape: "assets/img/iconbox_shape.png",
      shapePosition: "cs_right",
      active: false,
    },
    {
      index: "02",
      title: "Infection Prevention",
      subtitle: "Medical competitor research dental startup to financial",
      icon: "assets/img/icons/process_icon_2.png",
      shape: null,
      shapePosition: "",
      active: true,
    },
    {
      index: "03",
      title: "Complete Check",
      subtitle: "Medical competitor research dental startup to financial",
      icon: "assets/img/icons/process_icon_3.png",
      shape: "assets/img/iconbox_shape.png",
      shapePosition: "cs_left",
      active: false,
    },
  ],
  button: {
    variant: "cs_btn cs_style_1 cs_color_1",
    text: "View All Work",
    url: "/",
  },
  backgroundImage: "assets/img/process_bg_1.jpg",
};

const homeV3ContactData = {
  sectionSubtitle: "BOOKING SYSTEM",
  SectionTitle: "Book Your Dental <br />Appointment",
  teethShapeImg: "assets/img/icons/hero_shape_3.png",
  contactImg: "/assets/img/doctors/docter-at-dental-clinic.png",
  submitText: "Book Appointment",
  iconBox: {
    style: "cs_style_4",
    icon: "assets/img/icons/call_icon_1.png",
    title: "Booking Help",
    subtitle: "24/7 – Fast support for appointments",
  },
};

const homeV3MapData = {
  mapSrc:
    "https://www.google.com/maps?hl=en&q=Shop%20%236%2C%20Muslim%20Town%2C%20Band%20Khanna%20Rd%2C%20Chungi%20%238%2C%20Rawalpindi&t=&z=17&ie=UTF8&iwloc=B&output=embed",
};

const countersData = [
  {
    iconUrl: "/assets/img/icons/counter_icon_1.png",
    number: "567+",
    title: "Active Clients",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_2.png",
    number: "23K+",
    title: "Team Support",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_3.png",
    number: "241+",
    title: "Projects Complete",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_4.png",
    number: "16K+",
    title: "Award Winner",
  },
];

const serviceData = {
  subtitle: "OUR BEST SERVICE",
  title: "High-Quality Services This Doctor",
  description:
    "We are privileged to work with hundreds of future-thinking medial,<br> including many of the world’s top hardware, software, and<br> brands, feel safe and comfortable in establishing.",
  services: [
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_1.png",
      index: "01",
      title: "Pharmacology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_2.png",
      index: "02",
      title: "Orthopedic",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_3.png",
      index: "03",
      title: "Hematology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_4.png",
      index: "04",
      title: "Plastic Surgery",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_5.png",
      index: "05",
      title: "Neurology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_6.png",
      index: "06",
      title: "Ophthalmology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_7.png",
      index: "07",
      title: "Dental Care",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_8.png",
      index: "08",
      title: "Cardiology",
      subtitle: "Medical competitor research startup to financial",
      link: "/service/service-details",
    },
  ],
  footerIcon: "/assets/img/icons/service_footer_icon_1.png",
  footerText:
    "Delivering tomorrow’s health care for your family.<br>medical this View",
  footerLink: "/",
  footerLinkText: "SEE MORE",
};

const teamData = {
  subtitle: "Doctors",
  title: "Qualified Professionals <br />You Can Trust",
  sliderData: [
    {
      name: "Dr. Abdul Mateen",
      profession:
        "Dental Surgeon BDS (PAK), RDS (PM&DC), FCPS II, OMSF PTMS Ex-Demonstrator at FTH PMDC: 23359-D",
      imageUrl: "/assets/img/doctors/doctor-1-2.jpg",
      theme: "green",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. Faizan Ul Haq",
      profession: "Dental Surgeon BDS, RDS, PMDC: 24584-D",
      imageUrl: "/assets/img/doctors/doctor-1-2.jpg",
      theme: "orange",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. Toqir Ahmad",
      profession: "BDS, RDS, FCPS, PMDC: 2306-D",
      imageUrl: "/assets/img/doctors/doctor-3.jpg",
      theme: "green",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Dr. Nabila Shaikh",
      profession: "Dental Surgeon BDS, RDS, PMDC: 24584-D",
      imageUrl: "/assets/img/doctors/doctor4.webp",
      theme: "orange",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
  ],
};

const brandData = [
  { image: "/assets/img/envato-logo.png", altText: "Brand 1" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 2" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 3" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 4" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 5" },
  { image: "/assets/img/envato-logo.png", altText: "Brand 6" },
];

const sectionData = {
  subtitle: "WHY CHOOSE US",
  title: "Medical Ready To Get This <br /> Health Solution.",
  services: [
    {
      iconUrl: "/assets/img/icons/service_icon_9.png",
      title: "Expert Care",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_10.png",
      title: "Emergency Help",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_11.png",
      title: "Qualified Doctors",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_12.png",
      title: "Medical Advices",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_13.png",
      title: "Medical Research",
      subtitle: "Medical competitor research startup to financial",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_14.png",
      title: "Affordable Prices",
      subtitle: "Medical competitor research startup to financial",
    },
  ],
};

const projectData = {
  title: "All The Great Work That<br> Medical Service",
  subtitle: "OUR PORTFOLIO",
  description:
    "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.",
  tabs: [
    { id: "dental", label: "Dental" },
    { id: "cardiology", label: "Cardiology" },
    { id: "neurology", label: "Neurology" },
    { id: "medical", label: "Medical" },
  ],
  tabData: [
    {
      id: "dental",
      items: [
        {
          imgUrl: "/assets/img/project_1.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/project_2.jpg",
          title: "Medical Of Dental",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 2,
        },
        {
          imgUrl: "/assets/img/project_3.jpg",
          title: "Laboratory Technologist",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 3,
        },
      ],
    },
    {
      id: "cardiology",
      items: [
        {
          imgUrl: "/assets/img/project_1.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/project_3.jpg",
          title: "Laboratory Technologist",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 3,
        },
        {
          imgUrl: "/assets/img/project_2.jpg",
          title: "Medical Of Dental",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 2,
        },
      ],
    },
    {
      id: "neurology",
      items: [
        {
          imgUrl: "/assets/img/project_1.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/project_3.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/project_2.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
      ],
    },
    {
      id: "medical",
      items: [
        {
          imgUrl: "/assets/img/project_3.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/project_2.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/project_1.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
      ],
    },
  ],
};

const ctaData1 = {
  videoLink: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoButtonText: "WATCH VIDEO",
  subtitle: "OUR WATCH VIDEO",
  title: "Professional Medical Care Measure Medical.",
  description:
    "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.",
  buttonLink: "/contact",
  buttonText: "Video More",
  brandImage: "assets/img/medical_brand.png",
};

const medicalTabsData = {
  subtitle: "Service Offerings",
  title: "Explore Our Service<br> Offerings",
  tabsTitle: [
    {
      href: "brain_althim",
      iconUrl: "assets/img/icons/tab_link_icon_1.png",
      label: "Modern Technology",
    },
    {
      href: "emergency",
      iconUrl: "assets/img/icons/tab_link_icon_2.png",
      label: "Success of Treatment",
    },
    {
      href: "heart_beat",
      iconUrl: "assets/img/icons/tab_link_icon_3.png",
      label: "Certified Doctors",
    },
    {
      href: "blood_test",
      iconUrl: "assets/img/icons/tab_link_icon_4.png",
      label: "Medical Advice",
    },
  ],
  tabsData: [
    {
      id: "brain_althim",
      imageSrc: "assets/img/post_6.jpeg",
      title: "We are here to hear and heal your",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.",
        },
      ],
      linkHref: "/contact",
      buttonText: "Read More",
    },
    {
      id: "emergency",
      imageSrc: "assets/img/post_5.jpeg",
      title: "Treatment patients in primary care",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.",
        },
      ],
      linkHref: "/contact",
      buttonText: "Read More",
    },
    {
      id: "heart_beat",
      imageSrc: "assets/img/post_1.jpeg",
      title: "Accreditation within a given specialty",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.",
        },
      ],
      linkHref: "/contact",
      buttonText: "Read More",
    },
    {
      id: "blood_test",
      imageSrc: "assets/img/post_3.jpeg",
      title: "Better Health While Aging health",
      subtitle:
        "We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.",
        },
      ],
      linkHref: "/contact",
      buttonText: "Read More",
    },
    // Add other tab data here
  ],
};

const blogsData = {
  sectionTitle: "OUR LARGEST BLOG",
  sectionSubtitle: "Latest Posts &amp; Articles",
  postsData: [
    {
      title: "Medical Of This Working Health Blog",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_1.jpg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "There Is Only One Thing That Is Hospital.",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_2.jpg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "This Working World and Infection Prevention.",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_3.jpg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Medical Of This Working Health Blog",
      subtitle:
        "Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/post_1.jpg",
      btnText: "Read More",
      postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
  ],
};

const MainHome = () => {
  const showLegacySections = false;

  return (
    <>
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}
      <main className="gd_clone_home">
        {/* Start Call Consultation Strip (below banner) */}
        <section className="gd_intro_top_strip">
          <div className="gd_intro_call_card">
            <div className="gd_intro_call_text">
              <FaPhone aria-hidden="true" />
              <span className="gd_intro_call_title">
                Call Our Dentist For A Consultation
              </span>
              <a className="gd_intro_call_phone" href="tel:03334425828">
                0333 4425828
              </a>
            </div>
          </div>
        </section>
        {/* End Call Consultation Strip */}
        <section className="gd_intro_clone_section">
          <div className="container">
            <div className="gd_intro_content">
              <div className="gd_intro_text">
                <h1>
                  Welcome to Ghani Dental Clinic &ndash; Your Family Dentist
                  in Rawalpindi
                </h1>
                <p>
                  At Ghani Dental Care Centre we combine advanced dental
                  technology with genuine compassion and personalized care. Our
                  experienced team delivers gentle, high-quality treatments in a
                  comfortable environment, helping every patient achieve lasting
                  oral health and a confident smile.
                </p>
                <p>
                  We offer complete dental care for every age and every need,
                  from routine checkups and cleanings to advanced treatments
                  like implants, root canals, whitening and orthodontics.
                </p>
              </div>

              <div className="gd_intro_image gd_intro_image_pair">
                <div className="gd_intro_image_back">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
                    alt="Smiling female patient in dental chair"
                  />
                </div>
                <div className="gd_intro_image_front">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
                    alt="Dentist examining patient's teeth"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeCloneSections />
      </main>

      {/* Existing home sections are disabled while screenshot sections are cloned. */}
      {showLegacySections && (
        <>
          {/* End Header Section */}

          {/* Start CTA Section */}
          <Section className="cs_cta cs_style_1 cs_type_1 position-relative overflow-hidden">
            <CtaSection3 data={ctaData3} />
          </Section>

          {/* End CTA Section */}
          {/* Start About Section */}
          <Section
            topSpaceLg="80"
            topSpaceMd="120"
            bottomSpaceLg="80"
            bottomSpaceMd="120"
            className="cs_about cs_style_1 position-relative"
          >
            <About data={aboutData} />
          </Section>

          {/* End About Section */}
          {/* Start Service Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            bottomSpaceLg="80"
            bottomSpaceMd="120"
            className="cs_gray_bg"
          >
            <ServiceSection3 data={homeV3ServiceSectionData} />
          </Section>

          {/* End Service Section */}
          {/* Start Medical Solution Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            bottomSpaceLg="80"
            bottomSpaceMd="120"
            className="cs_choose_us_section"
          >
            <MedicalSolution2 data={homeV3MedicalSolutionData} />
          </Section>

          {/* End Medical Solution Section */}
          {/* Start Doctors Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            className="cs_team_section position-relative"
          >
            <TeamSection
              variant={"cs_pagination cs_style_2 cs_accent_color"}
              bgColor={true}
              data={teamData}
            />
          </Section>

          {/* End Doctors Section */}

          {/* Start Timeline Section */}
          {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <TimelineSection data={homeV3TimeLineData} />
      </Section> */}

          {/* End Timeline Section */}
          {/* Start Projects Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            bottomSpaceLg="80"
            bottomSpaceMd="120"
            className="cs_portfolio_showcase"
          >
            <ProjectsSection2 data={homeV3ProjectSectionData} />
          </Section>

          {/* End Projects Section */}
          {/* Start Brand Section */}
          {/* <Section topSpaceLg="70" topSpaceMd="110" className="cs_blue_bg">
        <BrandsSlider hr bgColor="cs_blue_bg" data={brandData} />
      </Section> */}

          {/* End Brand Section */}
          {/* Start Process Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            bottomSpaceLg="70"
            bottomSpaceMd="110"
            className="cs_process cs_style_1 position-relative"
          >
            <ProcessSection1 data={homeV3ProcessData} />
          </Section>

          {/* End Process Section */}
          {/* Start Contact Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            bottomSpaceLg="80"
            bottomSpaceMd="120"
            className="cs_contact cs_booking_green"
          >
            <ContactSection data={homeV3ContactData} />
          </Section>

          {/* End Contact Section */}
          {/* Start Location Map */}
          <LocationMap mapSrc={homeV3MapData.mapSrc} />

          {/* End Location Map */}

          {/* Start Dental Solution Section */}
          <Section
            topSpaceLg="70"
            topSpaceMd="76"
            bottomSpaceLg="70"
            bottomSpaceMd="76"
            className="cs_bg_filed"
            backgroundImage="/assets/img/medical_solution_bg_2.jpg"
          >
            <DentalSolution data={homeV3DentalSolutionData} />
          </Section>

          {/* End Dental Solution Section */}

          {/* Start Blog Section */}

          <Section
            topSpaceLg="70"
            topSpaceMd="110"
            bottomSpaceLg="80"
            bottomSpaceMd="120"
          >
            <BlogSection data={blogsData} />
          </Section>
        </>
      )}
    </>
  );
};

export default MainHome;
