# API Endpoints

## HTML API

### Root

- 'GET / - loads React web app'

## JSON API

### Users

- 'POST /api/users'
- 'PATCH /api/users'

### Session

- 'POST /api/session'
- 'DELETE /api/session'
- 'GET /api/session'

### Recordings

- 'GET /api/recordings'
  - accepts 'request_type' and 'request_details'
- 'POST /api/recordings'
- 'GET /api/recordings/:id'
- 'DELETE /api/recordings/:id'
- 'PATCH /api/recordings/:id'

### Favorites

- 'POST /api/favorites'
- 'DELETE /api/favorites/:id'

### Comments

- 'GET /api/recordings/:id/comments'
- 'POST /api/comments'
- 'DELETE /api/comments/:id'
