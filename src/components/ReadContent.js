import { Component } from "react";

class ReadContent extends Component{
    render(){
      console.log("#ReadContent render()");
      return(
        <article>
          <h3>{this.props.title}</h3>
          {this.props.desc}
        </article>
      );
    }
  }
  export default ReadContent;