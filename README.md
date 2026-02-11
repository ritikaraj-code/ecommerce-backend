# 🛒 E-Commerce Backend API

Production-ready E-commerce Backend built with Node.js, Express, PostgreSQL (Sequelize), Redis, Casbin & Stripe.

## Features

- JWT Authentication + Role Based Access (Casbin)
- Product & Order Management
- Redis Cart & Caching
- Stripe Payments + Webhooks
- Admin APIs
- Rate Limiting & Logging
- Swagger Docs
- Dockerized Stack
- Jest API Tests

---

## Tech Stack

- Node.js + Express
- PostgreSQL + Sequelize
- Redis
- Casbin
- Stripe
- Swagger
- Docker + Docker Compose
- Jest + Supertest

---

## Setup

```bash
git clone https://github.com/yourname/ecommerce-backend.git
cd ecommerce-backend
cp .env.example .env
npm install
npm run dev



************
Architecture

Redis → Cart & Cache
PostgreSQL → Orders & Users
Stripe → Payments
Casbin → RBAC
