import ServiceDetails from "./ServiceDetails";

const bracesOrthodonticsData = {
  title: "Braces & Orthodontics",
  bannerImage:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Braces & Orthodontics",
  introDescription:
    "Orthodontic treatment corrects crowded teeth, spacing, and bite problems to improve both oral health and smile aesthetics. At Ghani Dental Clinic, we provide personalized braces and orthodontic solutions for teens and adults using modern techniques and careful planning. Our goal is to deliver a healthy bite, better alignment, and long-term confidence through safe and effective treatment.",
  introCta: "The Role of Orthodontics in Healthy Bite Alignment",
};

const BracesOrthodonticsPage = () => {
  return <ServiceDetails data={bracesOrthodonticsData} />;
};

export default BracesOrthodonticsPage;
