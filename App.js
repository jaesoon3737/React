import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Content from './components/Content';
import NavC from './components/NavC';
import { Component } from 'react';

/*
function App() {
  return (
    <div className="App">
      <Subject title="찢어주세요" sub="아무말도 말고 그냥"/>
      <NavC />
      <Content title="처음이라 그래 몇 일뒤엔 괜찮아져" desc="안녕 잘지내니 늦은 인사 뚜루룹"/>
    </div>
  );
}*/
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: "read",
      welcome: {title:"굳바이" , desc:"치킨먹고싶다"},
      subject: {title: "찢어주세요오" , sub:"아무말도 말고 그냥"},
      selected_navc_id: 2,
      navc: [
        {id:1 , title:"흔들리는꽃들속에서" , desc:"니 샴푸향이 느껴진거야 "},
        {id:2 , title:"너를 만나" , desc:"그 이후로 사소한~"},
        {id:3 , title:"그대 아무 걱정하지 말아요" , desc:"걱정 말아요 그대"},
      ], 
      content: {title:"널 사랑하지않아" , desc:"다른 이유는 없어"}
    };
  }
  
  render(){
    let _title , _desc = null;
    if(this.state.mode === "안녕"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read"){
     // _title = this.state.navc[0].title;
    // _desc = this.state.navc[0].desc;
      for(var i=0; i<this.state.navc.length;i++){
        var data = this.state.navc[i];
        if(data.id == this.state.selected_navc_id){
          _desc = data.desc;
          _title = data.title;
          break;
        }
      }
    } else if(this.state.mode === "write"){
      _title = this.state.navc[1].title;
      _desc = this.state.navc[1].desc;
    }
    //let s = window.crypto.getRandomValues();
    return(
      <div className="App">
        <Subject
           title={this.state.subject.title} 
           sub={this.state.subject.sub}
           onChangePage={function(){
              this.setState(
                {mode:"안녕"}
              );
           }.bind(this)}
           /> 
        {/* <header>
        <h1><a href='/'onClick={function(e){
          console.log("e" , e); //이벤트 객체확인
          e.preventDefault(); // <a>가가진 기능 중 하나인 페이지 갱신을 막음 
          //debugger;
          this.setState(
            {mode:"안녕"}
          );
          if(this.state.mode == "write"){
            this.setState(
              {mode:"안녕"}
            );
          } else if ( this.state.mode == "안녕"){
            this.setState(
              {mode:"read"}
            );
          }else if ( this.state.mode == "read"){
            this.setState(
              {mode:"write"}
            );
          }
        }.bind(this)}>{this.state.subject.title}</a></h1>
           {this.state.subject.sub}
        </header> */}
        <NavC 
        data={this.state.navc}
        onChangePage={function(){
          this.setState(
            {mode:"read"}
          );
         }.bind(this)}
        />
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}
export default App;
