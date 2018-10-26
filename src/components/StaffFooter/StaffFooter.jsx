import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './StaffFooter.scss'

export default class StaffFooter extends Component {
  handlerAddClick(evt){
    evt.preventDefault();
    let that = this;
    let item = {};
    let addForm = ReactDOM.findDOMNode(that.refs.addForm);
    let sex = addForm.querySelector('#staffAddSex');
    let id = addForm.querySelector('#staffAddId');
    
    item.name = addForm.querySelector('#staffAddName').value.trim();
    item.age = addForm.querySelector('#staffAddAge').value.trim();
    item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
    item.sex = sex.options[sex.selectedIndex].value;
    item.id = id.options[id.selectedIndex].value;

    /*
    *表单验证
    */
    if(item.name=='' || item.age=='' || item.descrip=='') {
      let tips = ReactDOM.findDOMNode(that.refs.tipsUnDone);
      tips.style.display = 'block';
      setTimeout(function(){
        tips.style.display = 'none';
      }, 1000);
      return;
    }
    //非负整数
        let numReg = /^\d+$/;
    if(!numReg.test(item.age) || parseInt(item.age)>150) {
      let tips = ReactDOM.findDOMNode(that.refs.tipsUnAge);
      tips.style.display = 'block';
      setTimeout(function(){
        tips.style.display = 'none';
      }, 1000);
      return;
    }
    
    that.props.addStaffItem(item);
    addForm.reset();
    
    //此处应在返回添加成功信息后确认
    let tips = ReactDOM.findDOMNode(that.refs.tips);
    tips.style.display = 'block';
    setTimeout(function(){
      tips.style.display = 'none';
      that.props.closeDetail();
    }, 1000);
  }

  closeForm() {
    let addForm = this.refs.addForm;
    this.props.closeDetail();
    addForm.reset();
  }

  componentWillMount () {
    // debugger;

  }

  render(){
    return (
      <div className="addLayout clearfix" style={{display: this.props.showItem}}>
        <form ref='addForm' className="addForm">
          <h4>人员新增</h4>
          <div className="formClose" onClick={this.closeForm.bind(this)}>+</div>
          <hr/>
          <div className="formRow">
            <label htmlFor='staffAddName' >姓名</label>
            <input ref='addName' id='staffAddName' type='text' placeholder='Your Name'/>
          </div>
          <div className="formRow">
            <label htmlFor='staffAddAge' >年龄</label>
            <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Age(0-150)'/>
          </div>
          <div className="formRow">
            <label htmlFor='staffAddSex' >性别</label>
            <select ref='addSex' id='staffAddSex'>
              <option value='男'>男</option>
              <option value='女'>女</option>
            </select>
          </div>
          <div className="formRow">
            <label htmlFor='staffAddId' >身份</label>
            <select ref='addId' id='staffAddId'>
              <option value='主任'>主任</option>
              <option value='老师'>老师</option>
              <option value='学生'>学生</option>
              <option value='实习'>实习</option>
            </select>
          </div>
          <div className="formRow">
            <label htmlFor='staffAddDescrip' >个人描述</label>
            <textarea ref='addDescrip' id='staffAddDescrip' type='text' rows="3" cols="40" style={{'resize':'none'}}></textarea>
          </div>
          <p ref="tips" className='tips' >提交成功</p>
          <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
          <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
          <div className="formSubmit">
            <button onClick={this.handlerAddClick.bind(this)}>提交</button>
          </div>
        </form>
      </div>
    )
  }
}