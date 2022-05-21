import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: `opk78ohl`,
  dataset: 'production',
  apiVersion: 'v1',
  token: `skyXNGhtrGpPWlvd1fvO7w6UxDPH2rRNh3ykTPvHHklPHwHwzUoZTYRUi4Fka2lp5xqG31aCZmHNQQmE3aDcbiIMSHb8p3JdB6gYSz7oeWdK4SZ2aqgTF3aKqueFGjgTXaBit8aQLhRs6rVyxasaABoutidSBZuCguENb9MeBFzzSYpcvaWU`,
  useCdn: false,
})
