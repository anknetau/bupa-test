import { Component, type ReactNode } from "react";

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
