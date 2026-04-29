import ServiceDetails from "./ServiceDetails";

const scalingPolishingData = {
  title: "Scaling & Polishing",
  bannerImage:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Scaling & Polishing",
  introDescription:
    "Scaling and polishing is an essential preventive treatment that removes plaque, tartar, and surface stains from teeth and gum lines. Regular professional cleaning reduces the risk of gum disease, cavities, and persistent bad breath while improving oral hygiene. Our dental team performs thorough yet gentle cleaning to help you maintain a fresh, healthy, and confident smile.",
  introCta: "The Role of Scaling in Preventing Gum Disease",
};

const ScalingPolishingPage = () => {
  return <ServiceDetails data={scalingPolishingData} />;
};

export default ScalingPolishingPage;
