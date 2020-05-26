# Stubmart

## Main Features

- ### Users can list events tickets for sale
- ### Other users can purchase tickets
- ### All users can list tickets for sale and purchase tickets
- ### A ticket gets locked while a user starts the checkout process
- ### A ticket is unlocked when a user leaves the checkout process.
- ### Ticket price can be changed when it's unlocked

- ### Online events ticket marketplace
- ### Clone of stubhub's general features
- ### Microservices arcitecture
- ### Deployment on Google Cloud

## Technologies

- #### TypeScript
- #### Node.js and Express
- #### MongoDB and Redis
- #### React with Next.js
- #### NATS streaming server (Event Bus)
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
