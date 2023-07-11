import * as React from 'react';

interface RouteList {
    id: number;
    path: string;
    roles: string[];
    icon: any;
}

const routeList: RouteList[] = [
    { id: 0, path: "/", roles: [''], icon: ''},
    { id: 1, path: "/", roles: [''], icon: ''},
    { id: 2, path: "/", roles: [''], icon: ''},
    { id: 3, path: "/", roles: [''], icon: ''}
]

export default function Routes() {
  return (
    <div>
      
    </div>
  );
}
