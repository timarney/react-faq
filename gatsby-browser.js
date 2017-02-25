import ReactGA from 'react-ga';
ReactGA.initialize('UA-92656401-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};