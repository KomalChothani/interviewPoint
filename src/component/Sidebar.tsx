import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInterviewDataByTopicName } from '../actions/interviewPointAction';

class Sidebar extends React.PureComponent {
    onItemClick(topicName) {
        this.props.getInterviewDataByTopicName(topicName);
    }

    render() {
        return (
            <div className="sidebar-container">
              {
                this.props.topicList.map(topic => 
                  <div className="topic-item" onClick={() => this.onItemClick(topic)}>{topic}</div>
                )
              }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getInterviewDataByTopicName,
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        topicList: state.topicList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
