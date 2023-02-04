import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App";
import './index.css'
import Layout from "./layout";
import StateContextProvider from "./store/StateContext";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ErrorBoundary>
          <StateContextProvider>
              <Layout>
                  <ErrorBoundary>
                      <App />
                  </ErrorBoundary>
              </Layout>
          </StateContextProvider>
      </ErrorBoundary>

  </React.StrictMode>,
)
