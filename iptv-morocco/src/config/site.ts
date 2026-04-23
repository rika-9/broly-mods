export const site = {
  name: "MoroccoTV",
  tagline: "Premium IPTV Subscription in Morocco",
  whatsapp: "+212600000000", // placeholder — change this
  whatsappDisplay: "+212 6XX XX XX XX",
  email: "support@moroccotv.ma",
  address: "Casablanca, Morocco",
  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    telegram: "https://t.me/",
    youtube: "https://youtube.com/",
  },
};

export const whatsappLink = (
  message = "مرحبا، أرغب في الاشتراك في خدمة MoroccoTV IPTV"
) => {
  const phone = site.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
