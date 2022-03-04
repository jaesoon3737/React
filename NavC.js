import { Component } from "react";
class NavC extends Component {
    render(){
        let lists = [];
        let data = this.props.data;
        for(let i=0;i<data.length;i++){
            lists.push(<li key={data[i].title}>
                <a  href={"/content/"+data[i].title} 
                onClick={
                    function(e){
                       // console.log("ㅎㅎ" , e);
                       // console.log("ㅎㅎ1" , e.target.dataset.id);
                        e.preventDefault();
                        //debugger; // 앗 하다가 코드가중간에 멈춰
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)
                }>
                    {data[i].title}
                        </a></li>);
        }
      return(
        <nav>
        <ul>
           {lists} 
        </ul>
        </nav>
      );
    }
  }

export default NavC;
