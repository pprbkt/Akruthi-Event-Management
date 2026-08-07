import { businessInfo, services, faqs } from "@/data/site-data";

export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": businessInfo.name,
    "alternateName": "Akruthi Events",
    "description": "Premium weddings, destination celebrations, corporate events, and custom fabrication across Karnataka since 2009.",
    "url": "https://akruthievents.com",
    "logo": "https://akruthievents.com/logo.png",
    "telephone": businessInfo.phone[0],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${businessInfo.address.line1}, ${businessInfo.address.line2}, ${businessInfo.address.line3}`,
      "addressLocality": businessInfo.address.area,
      "addressRegion": businessInfo.address.city,
      "postalCode": businessInfo.address.pin,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.868779,
      "longitude": 74.843114
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      businessInfo.social.instagram,
      businessInfo.social.facebook,
      businessInfo.social.youtube,
      businessInfo.social.twitter
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": businessInfo.name
        }
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://akruthievents.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://akruthievents.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://akruthievents.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Destinations",
        "item": "https://akruthievents.com/destination-weddings"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Packages",
        "item": "https://akruthievents.com/packages"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Gallery",
        "item": "https://akruthievents.com/gallery"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "FAQ",
        "item": "https://akruthievents.com/faq"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Contact",
        "item": "https://akruthievents.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
