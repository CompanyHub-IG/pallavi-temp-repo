import { createBrowserRouter } from "react-router-dom"; //Testing Git changes
import Root from "./components/Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ListRendering from "./pages/ListRendering";
import ConditionalRendering from "./pages/ConditionalRendering";
import UseContextPage from "./pages/UseContextPage";
import UseEffectPage from "./pages/UseEffectPage";
import UseReducerPage from "./pages/UseReducerPage";
import ReduxStoreExample from "./pages/ReduxStoreExample";
import ShadCNComponentsExample from "./pages/ShadCNComponentsExample";
import UseMemoHookPage from "./pages/UseMemoHookPage";
import UseCallbackHookPage from "./pages/UseCallbackHookPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use Root as the layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/list-rendering", element: <ListRendering /> },
      { path: "/conditional-rendering", element: <ConditionalRendering /> },
      { path: "/useContext-page", element: <UseContextPage /> },
      { path: "/useEffect-page", element: <UseEffectPage /> },
      { path: "/useReducer-page", element: <UseReducerPage /> },
      { path: "/redux-store-example", element: <ReduxStoreExample /> },
      {
        path: "/shadcn-components-example",
        element: <ShadCNComponentsExample />,
      },
      {
        path: "/useMemoHook",
        element: <UseMemoHookPage />,
      },
      {
        path: "/useCallbackHook",
        element: <UseCallbackHookPage />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
