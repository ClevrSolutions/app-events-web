import { Component, ReactNode } from "react";

import { AppEventsContainerProps } from "../typings/AppEventsProps";

export default class Events extends Component<AppEventsContainerProps> {
    private isExecuted = false;
    render(): ReactNode {
        if (!this.isExecuted && this.props.onLoadAction && this.props.onLoadAction.canExecute) {
            this.isExecuted = true;
            this.props.onLoadAction.execute();
        }
        return null;
    }
    componentWillUnmount(): void {
        if (this.props.onUnloadAction && this.props.onUnloadAction.canExecute) {
            this.props.onUnloadAction.execute();
        }
    }

    componentDidMount(): void {
        // console.log('- -- componentDidMount .....', this, this.props.onLoadAction && this.props.onLoadAction.canExecute);
        // setTimeout(() => {
        //     console.log('settimeout .....', this, this.props.onLoadAction && this.props.onLoadAction.canExecute);
        //     if (this.props.onLoadAction && this.props.onLoadAction.canExecute) {
        //         // console.log('onLoadAction is not null and can be executed');
        //         this.props.onLoadAction.execute();
        //     }
        // }, 500);
    }

    // UNSAFE_componentWillMount(): void {
    //     console.log('---UNSAFE_componentWillMount .....', this, this.props.onLoadAction && this.props.onLoadAction.canExecute);        
    //     if (this.props.onLoadAction && this.props.onLoadAction.canExecute) {
    //         console.log('onLoadAction is not null and can be executed');
    //         this.props.onLoadAction.execute();
    //     }
    // }
}
