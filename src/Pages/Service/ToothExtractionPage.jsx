import ServiceDetails from "./ServiceDetails";

const toothExtractionData = {
  title: "Tooth Extraction",
  bannerImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Tooth Extraction",
  introDescription:
    "Tooth extraction is recommended when a tooth is severely damaged, infected, impacted, or cannot be restored with conservative treatment. At Ghani Dental Clinic, we perform extractions with gentle techniques and proper anesthesia to keep the procedure comfortable and stress-free. Our team also provides complete aftercare guidance to support fast healing and safe recovery.",
  introCta: "When Tooth Extraction Becomes the Best Option",
};

const ToothExtractionPage = () => {
  return <ServiceDetails data={toothExtractionData} />;
};

export default ToothExtractionPage;
