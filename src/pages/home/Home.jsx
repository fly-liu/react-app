import React, { Component } from 'react';
import './Home.scss';
import StaffHeader from '@/components/StaffHeader/StaffHeader';
import StaffItemPanel from '@/components/StaffItemPanel/StaffItemPanel';
import StaffFooter from '@/components/StaffFooter/StaffFooter';
import StaffDetail from '@/components/StaffDetail/StaffDetail';

import Staff from '@/components/Staff';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      staff: new Staff,
      staffEdit: null,
      display_name: 'none',
    }
  }

  //增
	addStaffItem(item){
    this.setState({
      staff: this.state.staff.addStaffItem(item),
    });
  }

  //删
  removeStaffItem(key){
      this.setState({
        staff: this.state.staff.removeStaffItem(key)
    });
  }

  /*
  *详情
  */
  //打开
  detailStaffItem(key){
    this.setState({
      staffEdit: this.state.staff.staff.filter(item => {
        return item.key==key;
      })[0],
    });
  }
  //关闭
  closeDetail(){
      this.setState({
        staffEdit: null,
        display_name: 'none',
    });
  }
  //编辑
  editDetail(item){
      this.setState({
        staff : this.state.staff.editStaffItem(item)
    });
  }

  /*
  * 排序
  */
  sortStaff(sortType) {
      this.setState({
        staff: this.state.staff.sortStaff(sortType) 
    });
  }

  /*
  * 筛选
  */
  filtStaff(filtType) {
      this.setState({
        staff: this.state.staff.filtStaff(filtType)
    });
  }

  /*
  * 搜索
  */
  searchStaff(word) {
      this.setState({
        staff: this.state.staff.searchStaff(word)
    });
  }


  /**
   * 显示新增窗口
   */
  showAddLayout(show) {
    this.setState({display_name: 'block'});
  }

  render() {
    return (
      <div>
        <StaffHeader sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} searchStaff={this.searchStaff.bind(this)} showAddLayout={this.showAddLayout.bind(this)} />
        <StaffItemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
        <StaffFooter addStaffItem={this.addStaffItem.bind(this)} showItem={this.state.display_name} closeDetail={this.closeDetail.bind(this)} />
        <StaffDetail staffEdit={this.state.staffEdit} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
      </div>
    );
  }
}

export default Home;