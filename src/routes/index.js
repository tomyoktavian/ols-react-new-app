import React from 'react';

const route = [
    {
        path: '/admin',
        exact: true,
        auth: true,
        component: React.lazy(() => import('../views/apps/Dashboard'))
    },
]

export default route;