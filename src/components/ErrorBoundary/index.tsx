import classes from './index.module.css'
import React, {ErrorInfo, ReactNode} from "react";
import LittleCard from "../LittleCard";
import ErrorIcon from '@mui/icons-material/Error';

type ErrorBoundaryStateTypes = {
    error: Error|null
    errorInfo: ErrorInfo|null
}
type ErrorBoundaryPropsType = {
    children: ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryPropsType,ErrorBoundaryStateTypes> {
    constructor(props:ErrorBoundaryPropsType) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.error && this.state.errorInfo) {
            // Error path

            console.log(this.state)

            return (
                <div>
                    <LittleCard className={classes.littleCard}>
                        <ErrorIcon style={{ paddingRight:'3px',color:'#c9235b',fontSize:'33px'}}/>
                        <h3>{this.state.error.message}</h3>
                    </LittleCard>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary