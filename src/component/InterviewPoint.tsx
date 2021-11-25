import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllSubjectList } from '../actions/interviewPointAction';
import DetailSection from './DetailSection';
import Sidebar from './Sidebar';

class InterviewPoint extends React.PureComponent {
    componentDidMount() {
        this.props.getAllSubjectList();
    }

    render() {
        return (
            <div className="main-container">
              <Sidebar />
              <DetailSection />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllSubjectList,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(InterviewPoint);
