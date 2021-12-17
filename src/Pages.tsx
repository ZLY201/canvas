import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Spin from "./component/Spin";
import Container from "./component/Container";

const Home = React.lazy(() => import("./pages/Home"));
const Liquid = React.lazy(() => import("./pages/Liquid"));
const Images = React.lazy(() => import("./pages/Images"));
const Markdown = React.lazy(() => import("./pages/Markdown"));
const Marketing = React.lazy(() => import("./pages/Marketing"));
const ImageCube = React.lazy(() => import("./pages/ImageCube"));
const SaveAsHTML = React.lazy(() => import("./pages/Markdown/SaveAsHTML"));

const Pages = () => {
  return (
    <Container>
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route exact={true} path={"/home"} component={Home} />
          <Route exact={true} path={"/spin"} component={Spin} />
          <Route exact={true} path={"/liquid"} component={Liquid} />
          <Route exact={true} path={"/images"} component={Images} />
          <Route exact={true} path={"/markdown"} component={Markdown} />
          <Route exact={true} path={"/marketing"} component={Marketing} />
          <Route exact={true} path={"/imageCube"} component={ImageCube} />
          <Route exact={true} path={"/saveAsHTML"} component={SaveAsHTML} />
          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Pages;
