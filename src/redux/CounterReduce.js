
export default (data, action) => {
    console.log("data",data);
    console.log("action",action);

    switch (action.type) {
        case 'click':
             let newdata = [];
             data.forEach((item) => {
                if(item.id === action.id ){

                    item.img = 'hit' ;
                }
            });
            Object.assign(newdata, data);
            return newdata;
        default:
            return data;
    }
}
