import React from 'react';

class TwittForm extends React.Component{
    state = {name : '연주' , text: ''};
    render(){
        return(
            <form>
                <p>작성자 :연주</p>
            <div className="main">
                <textarea onChange={(e) =>{
                    this.setState({...this.state, text: e.target.value});
                }}
                value ={this.state.value}/>
            <button onClick={(e) =>{
                e.preventDefault();
                const date = new Date().toLocaleTimeString();
                this.props.submitHandler({...this.state,date});
            }}>twitt</button>
            </div>
            </form>
        )
    }
}

export default TwittForm;