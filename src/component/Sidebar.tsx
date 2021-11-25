import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.PureComponent {
    render() {
        console.log(this.props)
        return (
            <div className="sidebar-container">
              {this.props.topicList.map(topic => <div>{topic}</div>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.topicList,
    }
}

export default connect(mapStateToProps, null)(Sidebar);
