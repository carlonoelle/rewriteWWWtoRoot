An GCP AppEngine capable NodeJS App that simply redirects the user to the same page without the subdomain www in front of the root domain. Attention: The user will be redirected to the new domain with https protocol to save another redirect, if you use http this won't work for you

# Start it up

You must have the gcloud cli tool setup in order to run this command:
`gcloud app deploy`

It will ask you if the default settings are ok, and after that this is app is running in App Engine on GCP.
To map a www dns entry to the app, simply go to the gcp dashboard, to App Engine settings -> custom domains, and map your www domain to the app. It will give you an IP back that you can use for your DNS A-Type Entry for that subdomain.

You're done, all requests to www.DOMAIN.BLA/BLA will directly be redirected to DOMAIN.BLA/BLA
