import { isAuthenticated } from "./user_api_calls";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated()
            ? (
              <Component {...props} />
            )
            : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location },
                }}
              />
            )}
      />
    );
  };
  
  export default PrivateRoutes;
  