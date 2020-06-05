
import "./index.scss";


import { connect } from "react-redux";
import { NavLink ,withRouter} from "react-router-dom"
import { TabBar } from 'antd-mobile';
import { observer } from "mobx-react"
import carWatch from "../../react-redux/mobx/carWatch"
@observer
@withRouter 
export class AFoot extends Component {

    state = {
        foots: [
            { txt: "首页", path: "/app/home", name: "home", icon: "icon-home", imgs: { on: "https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg", off: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg" } },
            { txt: "分类", path: "/app/classify", name: "classify", icon: "icon-goodsfill", imgs: { on: require("../../../assets/images/classify2.png"), off: require("../../../assets/images/classify.png") } },
            { txt: "购物车", path: "/app/Car", name: "car", icon: "icon-shop_car", imgs: { on: require("../../../assets/images/car2.png"), off: require("../../../assets/images/car0.png") } },
            { txt: "个人中心", path: "/app/mine", name: "mine", icon: "icon-my", imgs: { on: require("../../../assets/images/mine2.png"), off: require("../../../assets/images/mine.png") } },
        ],
        selectedTab: "home"
    }



    componentWillMount() {
        console.log(this.props);
        var pathname = this.props.location.pathname;
        var tab = pathname.split("/app/")[1];
        console.log(tab);
        if (tab) {
            this.setState({
                selectedTab: tab
            })
        } else {
            this.setState({
                selectedTab: 'home'
            })
        }
    }


    componentWillReceiveProps() {
        console.log(this.props);
        var pathname = this.props.location.pathname;
        var tab = pathname.split("/app/")[1];
        console.log(tab);
    }


    render() {
        var pathname = this.props.location.pathname;
        var tab = pathname.split("/app/")[1];
        // carWatch.watchcarNum(); 
        console.log(carWatch)
        return (
            <div className="foot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {
                        this.state.foots.map((foot, i) => {
                            return (
                                <TabBar.Item
                                    title={foot.txt}
                                    key={i}
                                    icon={
                                        <div style={{
                                            width: '22px',
                                            height: '22px',
                                            backgroundSize: "22px 22px",
                                            background: ` url(${foot.imgs && foot.imgs.off}) center center /  21px 21px no-repeat`
                                        }}
                                        />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        backgroundSize: "22px 22px",
                                        background: ` url(${foot.imgs && foot.imgs.on}) center center /  21px 21px no-repeat`
                                    }}
                                    />

                                    }
                                    selected={this.state.selectedTab === foot.name}
                                    badge={i == 2 ? carWatch.carNum : 0}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: foot.name,
                                        });
                                        this.props.history.push(foot.path);
                                    }}
                                    data-seed="logId"
                                >
                                </TabBar.Item>
                            )
                        })
                    }

                </TabBar>
            </div>
        )
    }
}