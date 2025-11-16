export type MenuRenderItemProps = {
    id: number;
    name: string;
    description: string;
    route: string | null;
    icon: string | null;
    from: string;
}

export type MenuRenderProps = {
    item: MenuRenderItemProps;
}

export type MenuRenderItemNavigation = {
    Login: {} | undefined;
};