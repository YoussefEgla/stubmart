# Stubmart

## Overview

- ### Online events ticket marketplace
- ### Clone of stubhub's general features
- ### Microservices arcitecture
- ### Deployment on Google Cloud

---

## Main Features

- ### Users can list events tickets for sale
- ### Other users can purchase tickets
- ### All users can list tickets for sale and purchase tickets
- ### A ticket gets locked while a user starts the checkout process
- ### A ticket is unlocked when a user leaves the checkout process.
- ### Ticket price can be changed when it's unlocked

---

## Technologies

- #### TypeScript
- #### Node.js and Express
- #### MongoDB and Redis
- #### React with Next.js
- #### NATS streaming server (Event Bus)
- #### Docker and Kubernetes (GKE)
- #### Hosted on Google Cloud

---

## Services

- #### Auth
  - signup
  - login
  - logout
  - sessions
- #### Tickets
  - CRUD
- #### Orders
  - Order creation and management
- #### Expiration
  - Lock ticket when user opt-in to checkout
  - Unlock ticket when user opt-out from checkout
- #### Payments
  - Integration with Stripe
  - Cancel order if payment fails
  - Completes order when payment succeeds

---

## Database Schema Design

- #### User

  | Field    | Type   |
  | -------- | ------ |
  | email    | string |
  | password | string |

- #### Ticket

  | Field   | Type         |
  | ------- | ------------ |
  | title   | string       |
  | price   | number       |
  | userId  | Ref to User  |
  | orderId | Ref to Order |

- #### Order

  | Field     | Type          |
  | --------- | ------------- |
  | userId    | Ref to User   |
  | status    | **enum**      |
  | ticketId  | Ref to Ticket |
  | expiresAt | Date          |

- #### Charge

  | Field          | Type         |
  | -------------- | ------------ |
  | orderId        | Ref to Order |
  | status         | **enum**     |
  | amount         | number       |
  | stripeId       | string       |
  | stripeRefundId | string       |

- enum
  - Order Status
    - Created | Cancelled | Awaiting Payment | Completed
  - Charge Status
    - Created | Failed | Completed

---

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
  - ORDER_AWAITING_PAYMENT
  - ORDER_CANCELLED
- #### Payments
  - CHARGE_CREATED
  - CHARGE_REFUNDED
  - CHARGE_FAILED

---

## API

### Auth

| Purpose                      | Route                 | Method | Response                          |
| ---------------------------- | --------------------- | ------ | --------------------------------- |
| Sign up for an account       | /api/auth/signup      | POST   | {email: string, password: string} |
| login to an existing account | /api/auth/login       | POST   | {email: string, password: string} |
| Sign out                     | /api/auth/logout      | POST   | { }                               |
| Get user info                | /api/auth/currentuser | GET    | -                                 |
