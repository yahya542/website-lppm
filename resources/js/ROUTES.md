# React Router Documentation

This document outlines the React routing structure for the application.

## Routes

### Home Page
- **Path**: `/`
- **Component**: `Home`
- **Description**: Main landing page showing latest news, announcements, and research

### News Routes
- **Path**: `/news`
- **Component**: `NewsList`
- **Description**: Displays list of news articles

- **Path**: `/news/:id`
- **Component**: `NewsDetail`
- **Description**: Displays detailed view of a specific news article

### Announcement Routes
- **Path**: `/announcements`
- **Component**: `AnnouncementList`
- **Description**: Displays list of announcements

- **Path**: `/announcements/:id`
- **Component**: `AnnouncementDetail`
- **Description**: Displays detailed view of a specific announcement

### Research Routes
- **Path**: `/research`
- **Component**: `ResearchList`
- **Description**: Displays list of research publications

- **Path**: `/research/:id`
- **Component**: `ResearchDetail`
- **Description**: Displays detailed view of a specific research publication

## Router Structure

The application uses `react-router-dom` with the following structure:
- `BrowserRouter` as the main router
- `MainLayout` component wraps all routes
- All routes are defined within `Routes` component

## New Directory Structure

The React application now follows this organized structure:

```
resources/js/
├── app.jsx
├── router/
│   └── index.jsx
├── layout/
│   └── MainLayout.jsx
├── home/
│   └── Home.jsx
├── news/
│   ├── pages/
│   │   ├── NewsList.jsx
│   │   └── NewsDetail.jsx
│   ├── components/
│   │   └── NewsCard.jsx
│   └── services/
│       └── news.service.js
├── announcements/
│   ├── pages/
│   │   ├── AnnouncementList.jsx
│   │   └── AnnouncementDetail.jsx
│   └── services/
│       └── announcement.service.js
├── research/
│   ├── pages/
│   │   ├── ResearchList.jsx
│   │   └── ResearchDetail.jsx
│   └── services/
│       └── research.service.js
└── shared/
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── services/
        └── api.js
```

## API Integration

Each component connects to the following API endpoints:
- News: `/api/news`, `/api/news/:id`
- Announcements: `/api/announcements`, `/api/announcements/:id`
- Research: `/api/research`, `/api/research/:id`
- Categories: `/api/categories`
- Home data: `/api/home`

## Services

The application uses dedicated service files for API calls:
- `news.service.js` for news-related API calls
- `announcement.service.js` for announcement-related API calls
- `research.service.js` for research-related API calls
- `api.js` for shared API utilities