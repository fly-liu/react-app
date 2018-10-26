import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '@/pages/home/Home';
import Docs from '@/pages/docs/Docs'
import About from '@/pages/about/About';
import NotFound from '@/pages/NotFound';

const rootRouters = [{
        //根路由匹配
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/docs",
        component: Docs
    },
    {
        path: "/about",
        component: About
    },
    {
        // 404 匹配
        path: '*',
        component: NotFound
    }
];

export {
    rootRouters
}