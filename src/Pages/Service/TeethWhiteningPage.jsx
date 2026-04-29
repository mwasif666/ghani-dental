import ServiceDetails from "./ServiceDetails";

const teethWhiteningData = {
  title: "Teeth Whitening",
  bannerImage:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1920&q=80",
  introImage:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
  introTitle: "Teeth Whitening",
  introDescription:
    "Teeth whitening is a cosmetic dental treatment designed to reduce stains and brighten the natural shade of your teeth. At our clinic, we use professional whitening protocols that are safer and more effective than over-the-counter options. The procedure delivers visible improvement while minimizing sensitivity and helping patients achieve a cleaner, more youthful smile.",
  introCta: "Why Professional Whitening Gives Better Results",
};

const TeethWhiteningPage = () => {
  return <ServiceDetails data={teethWhiteningData} />;
};

export default TeethWhiteningPage;
