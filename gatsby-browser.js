import ReactGA from 'react-ga';
ReactGA.initialize(process.env.SITE_GA);

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};