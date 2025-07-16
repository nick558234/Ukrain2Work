// composables/useStructuredData.ts
export const useStructuredData = () => {
  const addOrganizationSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Ukraine2Work',
      url: 'https://ukraine2work.nl',
      logo: 'https://ukraine2work.nl/images/logo.jpg',
      description: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers door middel van skill-based matching.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'alex@ukraine2work.com'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NL',
        addressLocality: 'Eindhoven'
      },
      sameAs: [
        'https://linkedin.com/company/ukraine2work',
        'https://twitter.com/ukraine2work'
      ]
    }
    
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }]
    })
  }

  const addWebsiteSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Ukraine2Work',
      url: 'https://ukraine2work.nl',
      description: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers door middel van skill-based matching.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ukraine2work.nl/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
    
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }]
    })
  }

  const addServiceSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ukraine2Work Talent Matching',
      description: 'Skill-based matching platform die Oekraïense vluchtelingen verbindt met Nederlandse werkgevers voor duurzame arbeidsplaatsing.',
      provider: {
        '@type': 'Organization',
        name: 'Ukraine2Work'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Netherlands'
      },
      serviceType: 'Employment Services',
      audience: {
        '@type': 'Audience',
        audienceType: 'Ukrainian refugees and Dutch employers'
      }
    }
    
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }]
    })
  }

  return {
    addOrganizationSchema,
    addWebsiteSchema,
    addServiceSchema
  }
}
