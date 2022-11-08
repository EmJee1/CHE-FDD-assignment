# Why this specific directory

This is deployed to the S3 bucket because the Nuxt-app could not be deployed there. Nuxt adds imports relative to
the `/`
path. The contents of this directory are automatically deployed to the bucket and redirect to correct app that is hosted
on Firebase.
