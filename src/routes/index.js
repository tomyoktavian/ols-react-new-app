import React from 'react';

const route = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: React.lazy(() => import('../views/public/posts'))
    },
    {
        path: '/posts/:id',
        exact: true,
        auth: false,
        component: React.lazy(() => import('../views/public/postDetail'))
    },
    {
        path: '/liked-posts',
        auth: false,
        component: React.lazy(() => import('../views/public/likedPosts'))
    },
    {
        path: '/login',
        auth: false,
        component: React.lazy(() => import('../views/public/login'))
    },
    {
        path: '/admin',
        auth: true,
        component: React.lazy(() => import('../views/apps/Dashboard'))
    },
]

export default route;