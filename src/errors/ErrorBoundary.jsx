import React from 'react';
import Error from './Error';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
      }
    
      componentDidCatch(error, info) {
        this.setState({ hasError: true, error });
        console.error(error);
        console.log(info);
      }

    render(){
        if(this.state.hasError) {
            console.log("Error");
            return <Error />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;