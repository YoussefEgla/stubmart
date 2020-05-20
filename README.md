# Stubmart

- ### Online events ticket marketplace
- ### Clone of stubhub's general features
- ### Microservices arcitecture
- ### Deployment on Google Cloud

## Technologies

- #### Node.js, Express, MongoDB, Redis, React with Next.js and NATS streaming server
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

## Events

- #### Auth
  - USER_CREATED
  - USER_UPDATED
  - USER_DELETED
- #### Tickets
  - TICKET_CREATED
  - TICKET_UPDATED
  - TICKET_DELETED
- #### Orders
  - ORDER_CREATED
  - ORDER_CANCELLED
  - ORDER_EXPIRED
- #### Payments
  - CHARGE_CREATED
  - CHARGE_REFUNDED
