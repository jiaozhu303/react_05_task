import {connect} from 'react-redux';
import Page from '../components/Page';

const onHit = (id) => {

    return (dispatch, getState) => {
        console.log(getState());
        setTimeout(() => {
            return dispatch({type: 'click', id: id});
        }, 1000);
    };
};


const mapStateToProps = (data) => {

    return {data: data};
};

const mapDispatchToProps = (dispatch) => {

    return {
        onHit: (id) => {
            dispatch(onHit(id))
        }
    };
};


//方法和属性的映射
const RootApp = connect(mapStateToProps, mapDispatchToProps)(Page);

export default RootApp;