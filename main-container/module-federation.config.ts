export const mfConfig = {
  name: "main_container",
  remotes:{
    navigationBarApp:"navigationBarApp@http://localhost:3001/remoteEntry.js",
    authenticationApp:"authenticationApp@http://localhost:3002/remoteEntry.js",
    weatherForecastApp:"weatherForecastApp@http://localhost:3003/remoteEntry.js",

  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "@mui/icons-material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};