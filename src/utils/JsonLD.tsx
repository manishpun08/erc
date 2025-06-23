import Script from "next/script";

const ld1 = `{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Vatsalya",
  "url": "https://vatsalya.com.np/",
  "logo": "https://vatsalya.com.np/_next/image?url=%2Fhorizontal-logo.png&w=640&q=75",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+977-1-5970611",
    "contactType": "customer service",
    "areaServed": "NP",
    "availableLanguage": ["en","Nepali"]
  },
  "sameAs": [
    "https://www.facebook.com/vatsalyaivf/",
    "https://x.com/Vatsalya_IVF",
    "https://www.instagram.com/vatsalya_ivf_fertility_centre/",
    "http://www.youtube.com/@Vatsalyaivf",
    "https://np.linkedin.com/company/vatsalya-ivf-and-fertility-clinic"
  ]
}`;

const ld2 = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vatsalya",
  "image": "https://vatsalya.com.np/_next/image?url=%2Fhorizontal-logo.png&w=640&q=75",
  "@id": "",
  "url": "https://vatsalya.com.np/",
  "telephone": "+977-1-5970611",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Narayanchaur-1",
    "addressLocality": "Kathmandu",
    "postalCode": "46400",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.715488000000004,
    "longitude": 85.32531300000001
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "19:00"
  } 
}`;

const ld3 = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is infertility?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It is a condition of the reproductive system in which the couples are unable to conceive even after trying for more than a year without the use of any type of contraceptives."
    }
  },{
    "@type": "Question",
    "name": "Is infertility primarily a woman's problem?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "It is a common assumption that infertility is primarily related to the woman. In reality, only one-third of infertility cases are related to the woman alone. Statistically, one-third of infertility problems are related to men and the remaining one-third is a combination of fertility factors involving both partners or due to unknown causes. Unknown causes account for approximately twenty percent of infertility cases."
    }
  },{
    "@type": "Question",
    "name": "Does age have any role on infertility?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Age affects the ability to conceive and have a healthy baby. Age is the single biggest factor affecting a woman's fertility. For men, age-related fertility decline is more subtle but does happen. A woman's fertility starts to decline in her early 30s, with the decline speeding up after 35."
    }
  },{
    "@type": "Question",
    "name": "What is IUI process?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "IUI stands for intrauterine insemination. It is one of the common techniques of ART (Assisted Reproductive Technology). In this process, the processed (washed) sperm is used and put directly to the female's uterus. This process is matched with natural ovulating cycle."
    }
  },{
    "@type": "Question",
    "name": "बाँझोपन भनेको के हो?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "कुनै पनि गर्भरोधक साधनको प्रयोगबिना १ वर्षभन्दा बढी समय सम्म गर्भधारण गर्न नसकिएको अवस्था बाँझोपन हो ।"
    }
  }]
}`;

const JsonLD = () => {
  return (
    <>
      <Script
        id="jsonld-medical-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld1 }}
      />
      <Script
        id="jsonld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld2 }}
      />
      <Script
        id="jsonld-faq-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ld3 }}
      />
    </>
  );
};
export default JsonLD;
