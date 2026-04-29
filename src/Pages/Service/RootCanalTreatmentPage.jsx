import ServiceDetails from "./ServiceDetails";

const rootCanalTreatmentData = {
  title: "Root Canal Treatment",
  bannerImage:
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Root Canal Treatment",
  introDescription:
    "Root canal treatment is performed to remove infection inside the tooth and preserve the natural tooth structure. Our specialists clean and disinfect the canals, then seal the tooth to prevent reinfection and relieve pain. With modern anesthesia and advanced methods, the treatment is safe, effective, and far more comfortable than commonly assumed.",
  introCta: "How Root Canal Treatment Saves Natural Teeth",
};

const RootCanalTreatmentPage = () => {
  return <ServiceDetails data={rootCanalTreatmentData} />;
};

export default RootCanalTreatmentPage;
