import { Component, type ReactNode } from "react";
import type { Route } from "../+types/root";
import { isRouteErrorResponse } from "react-router";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  state = {} as State;
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  handleRetry = () => {
    this.setState({});
  };

  render() {
    if (this.state.error) {
      console.log(this.state);
      return (
        <div className="border border-red-700 rounded p-1">
          <p className="text-xl">Error: {this.state.error.message}</p>
          <button
            className="bg-orange-400 rounded-xl p-1 text-black cursor-pointer"
            onClick={this.handleRetry}
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ErrorBoundaryForPage({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
