import {connect} from 'react-redux';
import GameBox from '../components/gameBox';

const getHit = (id) => {

    return (dispatch, getState) => {

        // setTimeout(() => {
            return dispatch({type: 'click', id: id});
        // }, 1000);
    };
    // return {type: 'click', id: id};
};


const mapStateToProps = (data) => {
    // let id = 1;
    // let intv = setInterval(function(){
    //    let num =  Math.floor(Math.random()*10);
    //    if(num !== 0){
    //        id = num;
    //    }
    //     console.log(id);
    //    let newdata = [];
    //     data.forEach((item) => {
    //         if(item.id === id){
    //             item.show = true ;
    //         }else{
    //             item.show = false ;
    //         }
    //     });
    //     Object.assign(newdata, data);
    //     return newdata;
    // }, 1000);
    return {data: data};
};

const mapDispatchToProps = (dispatch, getState) => {

    return {
        onHit: (id) => {
            dispatch(getHit(id));
        }
    };
};


//方法和属性的映射
const RootApp = connect(mapStateToProps, mapDispatchToProps)(GameBox);

export default RootApp;