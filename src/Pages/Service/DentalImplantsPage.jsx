import ServiceDetails from "./ServiceDetails";

const dentalImplantsData = {
  title: "Dental Implants",
  bannerImage:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Dental Implants",
  introDescription:
    "Dental implants offer a strong and long-term solution for missing teeth by replacing both root and crown function. Implants improve chewing ability, speech clarity, and smile appearance while helping preserve jawbone health. Our team plans every implant case carefully to ensure natural aesthetics, stability, and durable outcomes for each patient.",
  introCta: "The Benefits of Dental Implants for Missing Teeth",
};

const DentalImplantsPage = () => {
  return <ServiceDetails data={dentalImplantsData} />;
};

export default DentalImplantsPage;
