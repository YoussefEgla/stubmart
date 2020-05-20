# Stubmart

- ### Online events ticket marketplace
- ### Clone of stubhub's general features
- ### Microservices arcitecture
- ### Deployment on Google Cloud

## Technologies

- #### Node.js, Express, MongoDB and React
- #### Docker and Kubernetes (GKE)
- #### Hosted on Google Cloud

## Services

- #### Auth
  - signup / login / logout and sessions
- #### Tickets
  - creation / editing / updating / deletion
- #### Orders
  - Order creation and management
- #### Expiration
  - Watches for orders to be created and cancels them after 15 minutes
- #### Payments
  - Handles credit card payments. Cancels orders if payments fail, completes if payment succeeds
