import {CompositeNavigationProp, RouteProp} from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";

export interface AuthNavigationProps<
    RouteName extends keyof AuthenticationRoutes
> {
    navigation: CompositeNavigationProp<StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, 'Home'>>;
    route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<
    RouteName extends keyof HomeRoutes
    > {
    navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}

export  type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
}
export type AuthenticationRoutes = {
    Onboarding: undefined;
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
}

export type HomeRoutes = {
    BeautifulPlacesCards: undefined;
}
