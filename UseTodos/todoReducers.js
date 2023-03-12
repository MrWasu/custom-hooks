export const todoReducer = ( estadoInicial = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...estadoInicial, action.payload ];

        case '[TODO] Remove Todo':
            return estadoInicial.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return estadoInicial.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return estadoInicial;
    }
}
