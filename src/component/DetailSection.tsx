import React from 'react';
import { connect } from 'react-redux';

class DetailSection extends React.PureComponent {
    render() {
        console.log(this.props.topicData)
        return (
            <div className='detail-section'>
                {this.props.topicData.map(topic => 
                    <>
                      <h3>{topic.question}</h3>
                      <div>{topic.answer}</div>
                    </>    
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicData: state.topicData,
    }
}

export default connect(mapStateToProps, null)(DetailSection);
