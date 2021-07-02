import { Component, ReactNode } from "react";

import { EventsContainerProps } from "../typings/EventsProps";

export default class Events extends Component<EventsContainerProps> {
    render(): ReactNode {
        return null;
    }
    componentWillUnmount(): void {
        if (this.props.onDestroyAction && this.props.onDestroyAction.canExecute) {
            this.props.onDestroyAction.execute();
        }
    }
}
