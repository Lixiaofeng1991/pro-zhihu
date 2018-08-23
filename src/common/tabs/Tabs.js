import React, {Component} from 'react'
import './Tabs.css'
import { TabBar } from 'antd-mobile';

export default class Tabs extends Component {
  constructor(props) {
    super();
    this.history = props.history;
    this.location = props.location;
    this.state = {
      selectedTab: this.location.pathname,
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    return (
      <div id="tabs">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-daohang"></i>}
            selectedIcon={<i className="iconfont icon-daohang"></i>}
            selected={this.state.selectedTab === '/home'}
            onPress={() => {
              this.setState({
                selectedTab: '/home',
              });
              this.history.push("/home");
            }}
            data-seed="logId"
          >
          </TabBar.Item>

          <TabBar.Item
            icon={<i className="iconfont icon-xiexiangfa"></i>}
            selectedIcon={<i className="iconfont icon-xiexiangfa"></i>}
            title="想法"
            key="thinks"
            selected={this.state.selectedTab === '/thinks'}
            onPress={() => {
              this.setState({
                selectedTab: '/thinks',
              });
              this.history.push("/thinks")
            }}
            data-seed="logId1"
          >
          </TabBar.Item>

          <TabBar.Item
            icon={<i className="iconfont icon-daxue"></i>}
            selectedIcon={<i className="iconfont icon-daxue"></i>}
            title="大学"
            key="university"
            selected={this.state.selectedTab === '/university'}
            onPress={() => {
              this.setState({
                selectedTab: '/university',
              });
              this.history.push("/university")
            }}
          >
          </TabBar.Item>

          <TabBar.Item
            icon={<i className="iconfont icon-xiaoxi"></i>}
            selectedIcon={<i className="iconfont icon-xiaoxi"></i>}
            title="消息"
            key="message"
            dot
            selected={this.state.selectedTab === '/messages'}
            onPress={() => {
              this.setState({
                selectedTab: '/messages',
              });
              this.history.push("/messages")
            }}
          >
          </TabBar.Item>

          <TabBar.Item
            icon={<i className="iconfont icon-personal"></i>}
            selectedIcon={<i className="iconfont icon-personal"></i>}
            title="消息"
            key="message"
            selected={this.state.selectedTab === '/mine'}
            onPress={() => {
              this.setState({
                selectedTab: '/mine',
              });
              this.history.push("/mine")
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}