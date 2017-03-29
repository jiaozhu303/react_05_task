import {connect} from 'react-redux';
import Page from '../components/Page';

const getHit = (id) => {
    console.log(111);
    // return (dispatch) => {
    //     console.log(222);
    //     // setTimeout(() => {
    //         return dispatch({type: 'click', id: id});
    //     // }, 1000);
    // };
    return {type: 'click', id: id};
};


const mapStateToProps = (data) => {

    return {data: data};
};

const mapDispatchToProps = (dispatch, getState) => {

    return {
        onHit: (id) => {
            getHit(id);
        }
    };
};


//方法和属性的映射
const RootApp = connect(mapStateToProps, mapDispatchToProps)(Page);

export default RootApp;