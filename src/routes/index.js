import React from 'react';

const route = [
    {
        path: '/admin',
        auth: true,
        component: React.lazy(() => import('../views/apps/Dashboard'))
    },
    {
        path: '/admin/create',
        auth: true,
        component: React.lazy(() => import('../views/apps/Posts/addPost'))
    },
    {
        path: '/admin/:id/edit',
        auth: true,
        component: React.lazy(() => import('../views/apps/Posts/editPosts'))
    },
]

export default route;