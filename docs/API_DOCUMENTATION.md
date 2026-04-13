# API Documentation

Base URL: `http://localhost:5000`

## Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `GET /api/auth/profile`

## Plantations

- `POST /api/plantations/create`
- `GET /api/plantations/all`
- `GET /api/plantations/:id`
- `PUT /api/plantations/:id/approve`
- `PUT /api/plantations/:id/reject`
- `DELETE /api/plantations/:id`

## Carbon

- `POST /api/carbon/calculate`
- `POST /api/carbon/mint-credit`
- `GET /api/carbon/credits`

## Marketplace

- `GET /api/marketplace/listings`
- `POST /api/marketplace/create`
- `POST /api/marketplace/buy/:id`

## Auth Header

`Authorization: Bearer <JWT_TOKEN>`
