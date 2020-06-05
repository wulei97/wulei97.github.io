
import "./index.scss";

import { NavLink } from "react-router-dom"
import { Badge } from "antd-mobile"
export class Foot extends Component {

    state = {
        foots: [
            { txt: "首页", path: "/app/home", name: "home", icon: "../../../assets/images/iconfont/iconfont-menu.ttf" },
            { txt: "分类", path: "/app/classify", name: "classify", icon: "icon-goodsfill" },
            { txt: "购物车", path: "/app/shopcar", name: "car", icon: "icon-shop_car" },
            { txt: "我", path: "/app/mine", name: "mine", icon: "icon-my" },
        ]
    }

    render() {
        return (
            <footer>
                {
                    this.state.foots.map((foot, i) => {
                        return (
                            <div key={i}>
                                <NavLink
                                    to={foot.path}
                                    activeClassName="nav-active"
                                >
                                    <img src={foot.icon} />
                                    {/* <i className={"iconfont " + foot.icon }></i> */}
                                    <span>{foot.txt}</span>
                                    {i == 2 && <Badge text={10} hot className="hot" />}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}