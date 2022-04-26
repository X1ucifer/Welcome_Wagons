import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bgwmjkt4',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'skquxmN0BBWLu3N5JRnXDZk3Fq2daw3lrTbJoIADllwog5pSOXRstqt9eQAWIykZCnWDeJX3czKzDC2niTaedleXA7VbhN0gFc5gR0TNnwXySf9rbbgcCBtTYLe1Lw84UxBHYMenXnamAFjmJPbCK6NOGSoTqNW8dFhsshMOSGvC0b7Mvhtq',
  useCdn: false,
})
