const imgChangesPath = "/assets/img%20chnages";
const defaultDentalImage =
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80";

export const serviceOptions = [
  { title: "General Dentistry", slug: "general-dentistry" },
  { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { title: "Scaling & Polishing", slug: "scaling-polishing" },
  { title: "Tooth Extraction", slug: "tooth-extraction" },
  { title: "Root Canal Treatment", slug: "root-canal-treatment" },
  { title: "Crown & Bridge", slug: "crown-bridge" },
  { title: "Teeth Whitening", slug: "teeth-whitening" },
  { title: "Dental Implants", slug: "dental-implants" },
  { title: "Dental Fillings", slug: "dental-fillings" },
  { title: "Braces & Orthodontics", slug: "braces-orthodontics" },
  { title: "Teeth Aligners", slug: "teeth-aligners" },
  { title: "Denture", slug: "denture" },
];

export const serviceDetailsBySlug = {
  "general-dentistry": {
    title: "General Dentistry",
    bannerImage: defaultDentalImage,
    introImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    introTitle: "Complete Dental Care for Healthy Smiles",
    introDescription:
      "General dentistry focuses on keeping your teeth, gums, and mouth healthy through regular checkups, cleanings, preventive care, and timely treatment. Our dentists help patients of all ages maintain strong oral health with gentle examinations, practical advice, and personalized treatment plans.",
    introCta: "Book Your Dental Checkup",
    benefitsHeading: "General Dentistry Services for Everyday Oral Health",
    benefits: [
      {
        title: "Routine Checkups",
        text: "Regular dental examinations help detect cavities, gum problems, and other oral concerns early, before they become more painful or costly.",
      },
      {
        title: "Professional Cleaning",
        text: "Thorough cleaning removes plaque and tartar buildup that daily brushing cannot fully reach, helping protect teeth and gums.",
      },
      {
        title: "Preventive Care",
        text: "Fluoride advice, oral hygiene guidance, and preventive planning help reduce the risk of future dental issues.",
      },
      {
        title: "Restorative Support",
        text: "When problems appear, treatments such as fillings, crowns, root canal care, or extractions are planned according to your needs.",
      },
      {
        title: "Emergency Dental Help",
        text: "Toothache, broken teeth, swelling, and urgent discomfort are assessed carefully so you can receive timely care.",
      },
      {
        title: "Family-Friendly Care",
        text: "Our team provides clear guidance and comfortable treatment for children, adults, and older patients.",
      },
    ],
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    bannerImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80",
    introImage: `${imgChangesPath}/Cosmetic%20Dentistry.jpg`,
    introTitle: "Improve the Beauty of Your Smile",
    introDescription:
      "Cosmetic dentistry improves the appearance of teeth affected by stains, chips, gaps, uneven shapes, or discoloration. We plan every smile enhancement around your natural features so the final result looks clean, balanced, and confident.",
    introCta: "Plan Your Smile Makeover",
    benefitsHeading: "Cosmetic Dental Treatments for a Confident Smile",
    benefits: [
      {
        title: "Natural Smile Design",
        text: "Treatment is planned around your face, tooth shade, and smile line for results that look balanced instead of artificial.",
      },
      {
        title: "Whitening and Brightening",
        text: "Professional whitening helps reduce stains and improve tooth shade with a safer, controlled process.",
      },
      {
        title: "Chipped Tooth Repair",
        text: "Bonding and cosmetic restorations can repair small chips, worn edges, and minor shape concerns.",
      },
      {
        title: "Gap and Shape Correction",
        text: "Selected treatments can improve spacing, uneven teeth, and visible imperfections in the smile zone.",
      },
      {
        title: "Confidence in Daily Life",
        text: "A cleaner, more even smile can improve confidence in photos, work, and social interactions.",
      },
      {
        title: "Personalized Treatment Plan",
        text: "We recommend only the cosmetic options that fit your oral health, goals, and budget.",
      },
    ],
  },
  "scaling-polishing": {
    title: "Scaling & Polishing",
    bannerImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1920&q=80",
    introImage:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    introTitle: "Gentle Cleaning for Fresher, Healthier Teeth",
    introDescription:
      "Scaling and polishing removes plaque, tartar, and surface stains from teeth and gum lines. Regular professional cleaning helps reduce gum inflammation, bad breath, and cavity risk while leaving your smile feeling fresh and smooth.",
    introCta: "Clean and Protect Your Smile",
    benefitsHeading: "Scaling & Polishing for Gum Health and Fresh Breath",
    benefits: [
      {
        title: "Plaque and Tartar Removal",
        text: "Professional instruments remove hardened buildup that cannot be removed with brushing alone.",
      },
      {
        title: "Healthier Gums",
        text: "Cleaning around the gum line helps reduce bleeding, swelling, and early signs of gum disease.",
      },
      {
        title: "Fresh Breath",
        text: "Removing bacteria and trapped deposits helps improve breath freshness and daily comfort.",
      },
      {
        title: "Surface Stain Reduction",
        text: "Polishing smooths the tooth surface and helps reduce stains from tea, coffee, tobacco, and food.",
      },
      {
        title: "Preventive Dental Care",
        text: "Regular cleaning supports long-term oral health and helps avoid more complex treatment later.",
      },
      {
        title: "Comfortable Procedure",
        text: "Our team works gently and adjusts the cleaning approach according to your sensitivity level.",
      },
    ],
  },
  "tooth-extraction": {
    title: "Tooth Extraction",
    bannerImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80",
    introImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    introTitle: "Safe Tooth Removal with Gentle Care",
    introDescription:
      "Tooth extraction is recommended when a tooth is severely damaged, infected, impacted, or cannot be restored with conservative treatment. We perform extractions with proper anesthesia, careful technique, and clear aftercare guidance to support comfortable healing.",
    introCta: "Get Relief from Problem Teeth",
    benefitsHeading: "Tooth Extraction When a Tooth Cannot Be Saved",
    benefits: [
      {
        title: "Pain and Infection Relief",
        text: "Removing a badly infected or damaged tooth can stop ongoing pain and prevent infection from spreading.",
      },
      {
        title: "Wisdom Tooth Support",
        text: "Impacted or painful wisdom teeth are assessed carefully before planning safe removal.",
      },
      {
        title: "Gentle Local Anesthesia",
        text: "The area is numbed properly so treatment can be completed with comfort and control.",
      },
      {
        title: "Clear Aftercare Instructions",
        text: "We explain how to care for the extraction site, manage swelling, and protect the blood clot.",
      },
      {
        title: "Replacement Planning",
        text: "When needed, we discuss replacement options such as implants, bridges, or dentures after healing.",
      },
      {
        title: "Safe Recovery Focus",
        text: "Our team checks your medical history and treatment needs to reduce risks and support smooth healing.",
      },
    ],
  },
  "root-canal-treatment": {
    title: "Root Canal Treatment",
    bannerImage:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1920&q=80",
    introImage: `${imgChangesPath}/root-canal.jpg`,
    introTitle: "Save Your Natural Tooth with Root Canal Treatment",
    introDescription:
      "Root canal treatment removes infection from inside the tooth while preserving the natural tooth structure. The canals are cleaned, disinfected, and sealed to relieve pain and prevent reinfection. With modern anesthesia and careful technique, treatment is safe and comfortable.",
    introCta: "Stop Tooth Pain and Save the Tooth",
    benefitsHeading: "Root Canal Treatment for Infected or Painful Teeth",
    benefits: [
      {
        title: "Relieves Deep Tooth Pain",
        text: "Treatment removes infected pulp tissue that often causes severe toothache, sensitivity, or swelling.",
      },
      {
        title: "Preserves Natural Teeth",
        text: "Instead of removing the tooth, root canal treatment helps keep your natural tooth in function.",
      },
      {
        title: "Prevents Reinfection",
        text: "The canals are cleaned and sealed to reduce the risk of recurring infection.",
      },
      {
        title: "Comfort-Focused Care",
        text: "Local anesthesia and careful technique make the procedure much more comfortable than many patients expect.",
      },
      {
        title: "Restores Chewing",
        text: "After sealing and final restoration, the tooth can return to normal biting and chewing function.",
      },
      {
        title: "Crown Planning When Needed",
        text: "For weak back teeth, a crown may be recommended after treatment to protect the tooth long term.",
      },
    ],
  },
  "teeth-whitening": {
    title: "Teeth Whitening",
    bannerImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1920&q=80",
    introImage: `${imgChangesPath}/Teeth-Whitening.jpg`,
    introTitle: "Brighten Your Smile with Professional Whitening",
    introDescription:
      "Teeth whitening is a cosmetic treatment designed to reduce stains and brighten the natural shade of your teeth. Professional whitening protocols are safer and more effective than over-the-counter options, giving visible improvement while minimizing sensitivity.",
    introCta: "Get a Brighter Smile",
    benefitsHeading: "Professional Teeth Whitening for Stain-Free Smiles",
    benefits: [
      {
        title: "Visible Shade Improvement",
        text: "Professional whitening can brighten teeth affected by tea, coffee, tobacco, and natural discoloration.",
      },
      {
        title: "Safer Than DIY Products",
        text: "Dentist-supervised whitening uses controlled materials and timing to protect teeth and gums.",
      },
      {
        title: "Fast Cosmetic Refresh",
        text: "Whitening is a simple way to refresh your smile before events, photos, or daily confidence goals.",
      },
      {
        title: "Sensitivity Management",
        text: "We assess sensitivity and guide aftercare so the process remains comfortable.",
      },
      {
        title: "Natural-Looking Brightness",
        text: "The goal is a cleaner, brighter version of your own smile, not an artificial appearance.",
      },
      {
        title: "Maintenance Guidance",
        text: "Our team explains how to maintain whitening results with practical eating and cleaning habits.",
      },
    ],
  },
  "dental-implants": {
    title: "Dental Implants",
    bannerImage: defaultDentalImage,
    introImage: `${imgChangesPath}/Dental-Implant.png`,
    introTitle: "Replace Missing Teeth with Strong Dental Implants",
    introDescription:
      "Dental implants offer a strong and long-term solution for missing teeth by replacing both root and crown function. Implants improve chewing ability, speech clarity, and smile appearance while helping preserve jawbone health through careful planning and durable restoration.",
    introCta: "Restore Missing Teeth Permanently",
    benefitsHeading: "Dental Implants for Stable, Natural Tooth Replacement",
    benefits: [
      {
        title: "Strong Tooth Replacement",
        text: "Implants are designed to feel stable while eating, speaking, and smiling.",
      },
      {
        title: "Helps Preserve Bone",
        text: "Replacing the tooth root helps support the jawbone and reduces bone shrinkage in the missing tooth area.",
      },
      {
        title: "Natural Appearance",
        text: "Implant crowns are shaped and shaded to blend with your surrounding teeth.",
      },
      {
        title: "No Removable Plate",
        text: "Implants stay fixed in place and do not need to be removed like traditional dentures.",
      },
      {
        title: "Protects Nearby Teeth",
        text: "Unlike some bridges, implant treatment usually does not require trimming neighboring healthy teeth.",
      },
      {
        title: "Careful Case Planning",
        text: "We assess bone, gums, bite, and medical history before recommending implant treatment.",
      },
    ],
  },
  "dental-fillings": {
    title: "Dental Fillings",
    bannerImage:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1920&q=80",
    introImage: `${imgChangesPath}/dental-filling.jpg`,
    introTitle: "Repair Cavities with Natural-Looking Fillings",
    introDescription:
      "Dental fillings restore teeth affected by decay, cracks, or minor damage while preserving natural tooth structure. We use durable tooth-colored materials that blend with your smile and help prevent deeper decay or more complex treatment later.",
    introCta: "Treat Cavities Early",
    benefitsHeading: "Dental Fillings to Restore and Protect Teeth",
    benefits: [
      {
        title: "Stops Decay Progression",
        text: "Removing decay and sealing the tooth helps prevent cavities from spreading deeper.",
      },
      {
        title: "Tooth-Colored Results",
        text: "Modern filling materials are selected to match your natural tooth shade as closely as possible.",
      },
      {
        title: "Preserves Tooth Structure",
        text: "Only the damaged portion is removed, helping retain as much healthy tooth as possible.",
      },
      {
        title: "Restores Chewing Comfort",
        text: "A well-shaped filling restores the tooth surface so chewing feels more comfortable.",
      },
      {
        title: "Reduces Sensitivity",
        text: "Sealing exposed or decayed areas can reduce sensitivity to cold, sweet, or pressure.",
      },
      {
        title: "Quick Preventive Treatment",
        text: "Early filling treatment can help avoid root canal therapy, crowns, or extraction.",
      },
    ],
  },
  "braces-orthodontics": {
    title: "Braces & Orthodontics",
    bannerImage: defaultDentalImage,
    introImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    introTitle: "Straighten Teeth and Improve Bite Alignment",
    introDescription:
      "Orthodontic treatment corrects crowded teeth, spacing, and bite problems to improve oral health and smile aesthetics. We provide personalized braces and orthodontic solutions for teens and adults using modern planning and careful progress monitoring.",
    introCta: "Plan Your Orthodontic Treatment",
    benefitsHeading: "Braces & Orthodontics for Better Alignment",
    benefits: [
      {
        title: "Straighter Teeth",
        text: "Orthodontics gradually moves teeth into better positions for a more balanced smile.",
      },
      {
        title: "Improved Bite Function",
        text: "Correcting bite problems can improve chewing comfort and reduce uneven tooth wear.",
      },
      {
        title: "Crowding and Gap Correction",
        text: "Treatment can address crowded teeth, spacing, rotations, and uneven alignment.",
      },
      {
        title: "Better Cleaning Access",
        text: "Aligned teeth are often easier to brush and floss, helping reduce plaque buildup.",
      },
      {
        title: "Personalized Appliance Options",
        text: "Your treatment plan may include braces, aligners, or other orthodontic appliances depending on your case.",
      },
      {
        title: "Progress Monitoring",
        text: "Regular visits help guide tooth movement safely and keep treatment on track.",
      },
    ],
  },
  "crown-bridge": {
    title: "Crown & Bridge",
    bannerImage: `${imgChangesPath}/crown%20and%20bridge.jpg`,
    introImage: `${imgChangesPath}/crown%20and%20bridge.jpg`,
    introTitle: "Restore Your Smile with Strong & Natural-Looking Crowns & Bridges",
    introDescription:
      "Damaged or missing teeth can affect your confidence, speech, and daily comfort. Our Crown & Bridge treatments restore both function and beauty using high-quality dental materials, precision planning, and restorations that blend naturally with your existing teeth.",
    introCta: "Restore Your Smile and Confidence",
    benefitsHeading: "Crown & Bridge Treatment for Damaged or Missing Teeth",
    benefits: [
      {
        title: "What is a Dental Crown?",
        text: "A dental crown is a custom-made cap placed over a damaged, weak, heavily filled, cracked, worn, or root canal-treated tooth to restore shape, strength, and appearance.",
      },
      {
        title: "What is a Dental Bridge?",
        text: "A dental bridge replaces one or more missing teeth by anchoring artificial teeth to neighboring natural teeth or dental implants.",
      },
      {
        title: "Natural Tooth-Like Appearance",
        text: "Crowns and bridges are shade-matched and shaped to blend comfortably with your smile.",
      },
      {
        title: "Improved Chewing and Speech",
        text: "Replacing damaged or missing teeth helps restore bite strength, speech clarity, and daily comfort.",
      },
      {
        title: "Protects Weak Teeth",
        text: "A crown can protect a compromised tooth from further fracture or damage.",
      },
      {
        title: "Custom Treatment Process",
        text: "We examine your teeth, take precise measurements, match the shade, fabricate the restoration, and adjust the final fit for comfort and function.",
      },
    ],
  },
  "teeth-aligners": {
    title: "Teeth Aligners",
    bannerImage: `${imgChangesPath}/teeth%20aligner.jpg`,
    introImage: `${imgChangesPath}/teeth%20aligner.jpg`,
    introTitle: "Achieve a Straighter Smile with Clear Teeth Aligners",
    introDescription:
      "Teeth aligners are a modern and comfortable alternative to traditional braces. Transparent, removable trays gradually move your teeth into proper alignment while maintaining a discreet appearance throughout treatment.",
    introCta: "Start Your Smile Transformation",
    benefitsHeading: "Clear Teeth Aligners for Comfortable Smile Correction",
    benefits: [
      {
        title: "What are Teeth Aligners?",
        text: "Teeth aligners are clear orthodontic trays made specifically for your teeth. They apply gentle pressure over time to gradually shift teeth into the desired position.",
      },
      {
        title: "Treats Common Alignment Issues",
        text: "Aligners can help with crooked teeth, gaps, mild to moderate crowding, bite alignment issues, and uneven smile appearance.",
      },
      {
        title: "Nearly Invisible Appearance",
        text: "Clear trays make treatment discreet for work, school, photos, and daily life.",
      },
      {
        title: "Removable and Comfortable",
        text: "You can remove aligners while eating, brushing, cleaning, or attending important events.",
      },
      {
        title: "Digital Planning",
        text: "Advanced scanning and treatment planning help create a precise series of custom aligners.",
      },
      {
        title: "Regular Progress Monitoring",
        text: "We monitor your progress and provide the next aligners as your smile gradually improves.",
      },
    ],
  },
  denture: {
    title: "Denture",
    bannerImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80",
    introImage: `${imgChangesPath}/dentures.jfif`,
    introTitle: "Replace Missing Teeth with Comfortable Dentures",
    introDescription:
      "Dentures are removable replacements for missing teeth and surrounding tissues. They help restore chewing, speech, smile appearance, and facial support for patients missing several or all teeth.",
    introCta: "Restore Your Smile with Dentures",
    benefitsHeading: "Dentures for Missing Teeth and Better Daily Comfort",
    benefits: [
      {
        title: "Restores Smile Appearance",
        text: "Dentures fill gaps caused by missing teeth and support a fuller, more natural smile.",
      },
      {
        title: "Improves Chewing",
        text: "A properly fitted denture helps you eat more comfortably than living with multiple missing teeth.",
      },
      {
        title: "Supports Speech",
        text: "Replacing missing teeth can improve pronunciation and speaking confidence.",
      },
      {
        title: "Facial Support",
        text: "Dentures help support lips and cheeks, reducing the sunken appearance caused by missing teeth.",
      },
      {
        title: "Custom Fit",
        text: "Measurements and adjustments are made to improve denture comfort and stability.",
      },
      {
        title: "Care Guidance",
        text: "We explain cleaning, storage, and follow-up care so your denture stays comfortable and functional.",
      },
    ],
  },
};

serviceDetailsBySlug["crowns-bridges"] = serviceDetailsBySlug["crown-bridge"];

export const getServiceDetails = slug => serviceDetailsBySlug[slug];
