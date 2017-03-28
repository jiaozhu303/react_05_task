
export default (data, action) => {

    switch (action.type) {
        case 'click':
            data.map((item) => {
                if(item.id === action.id ){
                    item.show = false ;
                }
            });

            return data;
        case 'DECREMENT':
            return data - 1;
        default:
            return data;
    }
}
