


import "./index.scss"
import { NavBar, Icon } from "antd-mobile";
import PropTypes from "prop-types"
export class Head extends Component {

    state = {
        search: true,
        getSS: "ssssd"
    }

    goback = () => {
        const { history } = this.context;
        history.push("/text");
    }


    goSearch = () => {
        const { history } = this.context;
        history.push("/search");
    }

    // getSSS () {
    //     const getSS = this.getSS;
    //     console.log(this.props);
    //     // this.props.changGetssd(getSS)

    // }

    render() {
        const {
            title,
            show
        } = this.props;
        const {
            search
        } = this.state;
        return (
            <NavBar
                mode="dark"
                icon={show ? <Icon type="left" /> : ""}
                onLeftClick={show ? () => this.goback() : () => console.log('')}
                rightContent={[
                    <Icon key="0" type="search" onClick={this.goSearch} style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{title}
                <button onClick={this.props.getfun}>{this.props.comment}</button>
            </NavBar>
            
        )
    }
}


Head.contextTypes = {
    history: PropTypes.object
}