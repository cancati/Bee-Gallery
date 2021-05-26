import * as React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import {useAuth} from "../contexts/context";
import {RouteProps} from "react-router";

interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component,  ...rest } = props;
    const {currentUser} = useAuth()

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                currentUser ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/Login',
                            state: { from: routeProps.location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
