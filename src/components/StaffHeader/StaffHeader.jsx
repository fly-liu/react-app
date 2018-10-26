import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './StaffHeader.scss';

export default class StaffHeader extends Component {
  //排序
  handlerOrderChange(){
    let sel = ReactDOM.findDOMNode(this.refs.selOrder);
    let selValue = sel.options[sel.selectedIndex].value;
    this.props.sortStaff(selValue);
  }

  //筛选
  handlerIdChange(){
      let sel = ReactDOM.findDOMNode(this.refs.selId);
    let selValue = sel.options[sel.selectedIndex].value;
    this.props.filtStaff(selValue);
  }

  //search
  handlerSearch(){
    let bar = ReactDOM.findDOMNode(this.refs.searchBar);
    let value = bar.value;
    this.props.searchStaff(value);
  }

  // 显示新增窗口
  handlerAdd() {
    this.props.showAddLayout(true);
  }

  render() {
    return (
      <div>
		    <h2 style={{'textAlign':'center','padding':'10px'}}>人员管理系统</h2>
			  <table className="optHeader">
          <tbody>
            <tr>
              <td className="headerTd"><input ref='searchBar' onChange={this.handlerSearch.bind(this)} type='text' placeholder='Search...' /></td>
              <td className="headerTd">
                <label htmlFor='idSelect'>人员筛选</label>
                <select id='idSelect' ref="selId" onChange={this.handlerIdChange.bind(this)}>
                    <option value='0'>全部</option>
                  <option value='1'>主任</option>
                  <option value='2'>老师</option>
                  <option value='3'>学生</option>
                  <option value='4'>实习</option>
                </select>
              </td>
              <td className="headerTd">
                <label htmlFor='orderSelect'>排列方式</label>
                <select id='orderSelect' ref="selOrder" onChange={this.handlerOrderChange.bind(this)}>
                  <option value='0'>身份</option>
                  <option value='1'>年龄升</option>
                  <option value='2'>年龄降</option>
                </select>
              </td>
              <td className="headerTd">
                <button className="headerAdd" onClick={this.handlerAdd.bind(this)}>新增</button>
              </td>
            </tr>
          </tbody>
			  </table>
		  </div>
    );
  }
}