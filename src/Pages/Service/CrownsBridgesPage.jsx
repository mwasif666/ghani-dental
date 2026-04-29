import ServiceDetails from "./ServiceDetails";

const crownsBridgesData = {
  title: "Crowns & Bridges",
  bannerImage:
    "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Crowns & Bridges",
  introDescription:
    "Crowns and bridges are restorative treatments used to strengthen damaged teeth and replace missing ones with a natural look. Dental crowns protect weak teeth after decay or root canal treatment, while bridges fill the gap created by missing teeth. These solutions improve chewing, speech, and smile harmony while restoring confidence in daily life.",
  introCta: "How Crowns & Bridges Restore Function and Smile",
};

const CrownsBridgesPage = () => {
  return <ServiceDetails data={crownsBridgesData} />;
};

export default CrownsBridgesPage;
