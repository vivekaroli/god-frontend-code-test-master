import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/css/styles.css";
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import { Cars } from "../src/components/Cars";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { AppProps } from 'next/app';

function HomePage({Component}:AppProps) {
  return (
    <React.StrictMode>
        <StyleProvider>
        <ThemePicker variant="light">
      <Component />
      </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
