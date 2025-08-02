export type MenuRenderItemNavigation = {
    AccountProfile: {} | undefined;
    ContactUs: {} | undefined;
    TermsOfUse: {} | undefined;
    PrivacyPolicy: {} | undefined;
};

export type MenuRenderItemProps = {
    id: number;
    name: string;
    description: string;
    route: string | null;
}