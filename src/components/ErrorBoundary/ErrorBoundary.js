import React, { Component } from "react";
/*using error boundaries:
-create errorboundary component: it basically will return html with the error message
or - just display what it is wrapped around props.children*/

class ErrorBoundary extends Component{
    state={
        hasError:false,
        errMsg:''
    }
    componentDidCatch=(error,info)=>{
        this.setState({hasError:true,errMsg:error});
    }

    render(){
        if(this.state.errMsg){
            return <h1>{this.state.errMsg}</h1>
        }else{
            // this class's properties children
            return this.props.children;
        }
    }

}

export default ErrorBoundary;