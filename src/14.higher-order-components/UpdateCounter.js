import react from 'react'
import React  from 'react'

const UpdateCounter = (OriginalComponent)  => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
        incrementCount(){
            this.setState({
                count: this.state.count + 1
            })
        }

        render(){
            
            return (
                <React.Fragment>
                    <h1>Hello</h1>
                    <OriginalComponent count={this.state.count}
                                      incrementCount = {()=>this.incrementCount()}
                    />
                </React.Fragment>
            )
        }
    }
}

export default UpdateCounter