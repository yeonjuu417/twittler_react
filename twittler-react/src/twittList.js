import React from 'react';
import Twitt from './twitt';

class TwittList extends React.Component{
    listRenderHelper(){
        return this.props.twittGroup.map((twitt) =>{
            return <Twitt twitt = {twitt} key ={twitt.id}/>; 
        })
    }
    render(){
    return <ul className="twittList">{this.listRenderHelper()}</ul>;
    }
}

export default TwittList;