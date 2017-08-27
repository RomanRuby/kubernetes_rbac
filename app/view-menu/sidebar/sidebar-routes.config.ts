import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'clusterrole', title: ' Role',  icon: 'content_paste', class: '' },
    { path: "clusterbinding", title: 'Binding',  icon: 'content_paste', class: '' },
    { path: 'role', title: ' Role',  icon: 'content_paste', class: '' },
    { path: "rolebinding", title: 'Binding',  icon: 'content_paste', class: '' },
    { path: "role/list", title: 'list',  icon: 'list', class: '' },
    { path: "role/patch", title: 'patch',  icon:'content_paste', class: '' },
    { path: "role/create", title: 'create',  icon:'create', class: '' },
    { path: "role/update", title: 'update',  icon:'update', class: '' },
    { path: "role/get", title: 'get',  icon:'person', class: '' },
    { path:"role/watch", title: 'watch',  icon:'dashboard', class: '' },
    { path: "role/delete", title: 'delete',  icon:'delete', class: '' },
    { path: "role/deleteCollection", title: 'delete collection',  icon:'delete', class: '' },
];
export const ROUTCluster: RouteInfo[] = [
    { path: 'clusterrole', title: ' Role',  icon: 'content_paste', class: '' },
    { path: "clusterbinding", title: 'Binding',  icon: 'content_paste', class: '' },
];
export const ROUTSingle: RouteInfo[] = [
    { path: 'role', title: ' Role',  icon: 'content_paste', class: '' },
    { path: "rolebinding", title: 'Binding',  icon: 'content_paste', class: '' },
];
export const ROUTDashboard: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }
];


