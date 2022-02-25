import React from 'react';

const route = [
    {
        path: '/admin',
        auth: true,
        component: React.lazy(() => import('../views/apps/Dashboard'))
    },
]

export default route;