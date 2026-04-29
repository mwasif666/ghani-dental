import ServiceDetails from "./ServiceDetails";

const dentalFillingsData = {
  title: "Dental Fillings",
  bannerImage:
    "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Dental Fillings",
  introDescription:
    "Dental fillings are used to restore teeth affected by decay, cracks, or minor damage while preserving natural tooth structure. Our clinic uses durable, tooth-colored filling materials that blend naturally with your smile and provide long-lasting protection. With timely filling treatment, patients can prevent deeper decay and avoid more complex procedures in the future.",
  introCta: "How Fillings Help Prevent Further Tooth Damage",
};

const DentalFillingsPage = () => {
  return <ServiceDetails data={dentalFillingsData} />;
};

export default DentalFillingsPage;
