import React, { Component } from 'react';

const countHits = (WrappedComponent, power) => {

    class CountHits extends Component {
        constructor(props) {
            super(props)

            this.state = {
                hits: 0
            }
        }

        addOne = (prevState) => {
            this.setState(prevState => {
                return {
                    hits: prevState.hits + 1
                }
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.state !== prevState) {
                const compName = WrappedComponent.name;
                this.props.reduceHandler(compName, power)
            }
        }


        render() {
            return <WrappedComponent addOneHit={this.addOne} higherOrderComponentState={this.state} {...this.props} />
        }
    }

    return CountHits
}


export default countHits;