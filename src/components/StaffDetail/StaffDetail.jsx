import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../StaffFooter/StaffFooter.scss'

export default class StaffDetail extends Component {
  handlerEdit(evt){
    evt.preventDefault();
    let that = this;
    let item = {};
    let editForm = ReactDOM.findDOMNode(that.refs.editForm);
    let sex = editForm.querySelector('#staffEditSex');
    let id = editForm.querySelector('#staffEditId');
    
    item.name = editForm.querySelector('#staffEditName').value.trim();
    item.age = editForm.querySelector('#staffEditAge').value.trim();
    item.descrip = editForm.querySelector('#staffEditDescrip').value.trim();
    item.sex = sex.options[sex.selectedIndex].value;
    item.id = id.options[id.selectedIndex].value;
    item.key = that.props.staffEdit.key;
    
    /*
    *表单验证
    */
    if(item.name=='' || item.age=='' || item.descrip=='') {
      let tips = ReactDOM.findDOMNode(that.refs.DtipsUnDone);
      tips.style.display = 'block';
      setTimeout(function(){
        tips.style.display = 'none';
      }, 1000);
      return;
    }
    //非负整数
    let numReg = /^\d+$/;
    if(!numReg.test(item.age) || parseInt(item.age)>150) {
      let tips = ReactDOM.findDOMNode(that.refs.DtipsUnAge);
      tips.style.display = 'block';
      setTimeout(function(){
        tips.style.display = 'none';
      }, 1000);
      return;
    }
    
    that.props.editDetail(item);
    
    //此处应在返回修改成功信息后确认
    let tips = ReactDOM.findDOMNode(that.refs.Dtips);
    tips.style.display = 'block';
    setTimeout(function(){
            tips.style.display = 'none';
            that.props.closeDetail();
    }, 1000);
  }

  handlerClose(){
    this.props.closeDetail();
  }

  componentDidUpdate(){
    if(this.props.staffEdit == null){

    }else {
      let selSex = this.refs.selSex;
      for(let i=0; i<selSex.options.length; i++){
        if(selSex.options[i].value == this.props.staffEdit.info.sex){
          selSex.options[i].selected = 'selected';
          break;
        }
      }
      let selId = this.refs.selId;
      for(let i=0; i<selId.options.length; i++) {
        if(selId.options[i].value == this.props.staffEdit.info.id){
          selId.options[i].selected = 'selected';
          break;
        }
      }
      
    }
  }

  render(){
    let staffEdit = this.props.staffEdit;  
    if(!staffEdit) {
      return null;
    }
    
    return (
      <div className="overLay clearfix" style={{display: this.props.showItem}}>
        <hr/>
        <form ref="editForm" className="editForm">
          <h4>人员修改</h4>
          <div className="formClose" onClick={this.handlerClose.bind(this)}>+</div>
          <hr/>
          <div className="formRow">
            <label htmlFor='staffEditName' >姓名</label>
            <input id='staffEditName' type="text" defaultValue={staffEdit.info.name}></input>
          </div>
          <div className="formRow">
            <label htmlFor='staffEditAge' >年龄</label>
            <input id='staffEditAge' type="text" defaultValue={staffEdit.info.age}></input>
          </div>
          <div className="formRow">
            <label htmlFor='staffEditSex' >性别</label>
            <select ref='selSex' id='staffEditSex'>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>
          <div className="formRow">
            <label htmlFor='staffEditId' >身份</label>
            <select ref="selId" id='staffEditId'>
              <option value="主任">主任</option>
              <option value="老师">老师</option>
              <option value="学生">学生</option>
              <option value="实习">实习</option>
            </select>
          </div>
          <div className="formRow">
            <label htmlFor='staffAddDescrip' >个人描述</label>
            <textarea id='staffEditDescrip' type="text" defaultValue={staffEdit.info.descrip} rows="3" cols="40" style={{'resize':'none'}}></textarea>
          </div>
          <p ref='Dtips' className='tips'>修改成功</p>
          <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
          <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
          <div className="formSubmit">
            <button onClick={this.handlerEdit.bind(this)}>完成</button>
            <button onClick={this.handlerClose.bind(this)}>关闭</button>
          </div>
          <h6 style={{'color':'#fd5555'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h6>
        </form>
      </div>
    );
  }
}