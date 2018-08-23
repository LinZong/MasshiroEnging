import React from 'react';
import { Layout, Menu, Icon, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { IMAGE_SETTING, TEXT_SETTING, SOUND_SETTING, CONTROLLER_SETTING, INGAME_SETTING } from '../../Engine/actionTypes/SettingType';
const { Content, Footer, Sider } = Layout;

class NavBar extends React.Component {
	constructor() {
		super(...arguments);
		this.state = { PanelPath: IMAGE_SETTING };
	}
	render() {
		return (
			<Layout style={{ height: '100vh' }}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
				>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.PanelPath]}>
						<Menu.Item key={IMAGE_SETTING}>
							<NavLink
								className="nav-text"
								onClick={() => this.setState({ PanelPath: IMAGE_SETTING })}
								to={{ pathname: '/NewSettings/' + IMAGE_SETTING, state: { ingame: this.props.InGame } }}>
								<Icon type="desktop" />
								画面设置
							</NavLink>
						</Menu.Item>
						<Menu.Item key={TEXT_SETTING}>
							<NavLink
								className="nav-text"
								onClick={() => this.setState({ PanelPath: TEXT_SETTING })}
								to={{ pathname: '/NewSettings/' + TEXT_SETTING, state: { ingame: this.props.InGame } }}>
								<Icon type="file-text" />
								文本设置
							</NavLink>
						</Menu.Item>
						<Menu.Item key="3">
							<NavLink
								className="nav-text"
								onClick={() => this.setState({ PanelPath: SOUND_SETTING })}
								to={{ pathname: '/NewSettings/' + SOUND_SETTING, state: { ingame: this.props.InGame } }}>
								<Icon type="sound" />
								声音设置
							</NavLink>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="tool" />
							<span className="nav-text">控制设置</span>
						</Menu.Item>
						<Menu.Item key="5">
							<Icon type="select" />
							<span className="nav-text">游戏进行设置</span>
						</Menu.Item>
						<Menu.Item key="6">
							<Icon type="reload" />
							<span className="nav-text">恢复初始设置</span>
						</Menu.Item>
					</Menu>
					<Menu theme="dark" mode="inline" selectable={false}>
						<Menu.Item key="7" disabled>
							<Icon type="save" />
							<span className="nav-text"><Tooltip title="您无需按下这个傻逼的按钮，一切动作将会自动保存">保存</Tooltip></span>
						</Menu.Item>
						{this.props.InGame &&
							<Menu.Item key="8">
								<NavLink className="nav-text" to='/section/prev'>
									<Icon type="to-top" />
									回到游戏
							</NavLink>
							</Menu.Item>
						}
						<Menu.Item key="9">
							<NavLink className="nav-text" to='/'>
								<Icon type="arrow-left" />
								回到主菜单
							</NavLink>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Content style={{ margin: '24px 16px 0' }}>
						{this.props.children}
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						まだ記憶の中の日々、あどけない笑顔二つ
     				 </Footer>
				</Layout>
			</Layout>
		);
	}
}


export default withRouter(NavBar);
