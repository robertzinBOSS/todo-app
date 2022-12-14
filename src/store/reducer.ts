export interface Todo {
    id: string;
    title: string;
    done: boolean;
}

const todos: Todo[] = [
    { id: '1', title: 'Complete online JavaScript course', done: true },
    { id: '2', title: 'Jog around the park 3x', done: false },
    { id: '3', title: '10 minutes meditation', done: false },
    { id: '4', title: 'Read for 1 hour', done: false },
    { id: '5', title: 'Pick up groceries', done: false },
    { id: '6', title: 'Complete Todo App on Frontend Mentor', done: false },
];
export const initialState = {
    data: todos,
    theme: localStorage.getItem('theme') || 'light',
    backup: todos,
    filterType: 1,
};

type AppState = typeof initialState;
type Action =
    | { type: 'SET_TODOS'; payload: Todo[] }
    | { type: 'ADD_TODO'; payload: Todo }
    | { type: 'UPDATE_TODO'; payload: Todo }
    | { type: 'DELETE_TODO'; payload: string }
    | { type: 'SET_THEME'; payload: string }
    | { type: 'SET_FILTER'; payload: number }
    | { type: 'CLEAR_COMPLETED' };

function filter(data: Todo[], type: number): Todo[] {
    switch (type) {
        case 1:
            return data;
        case 2:
            return data.filter(t => !t.done);
        case 3:
            return data.filter(t => t.done);
        default:
            throw new Error('Invalid type!');
    }
}

export function todosReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'SET_TODOS': {
            const backup = action.payload;
            const data = filter(backup, state.filterType);

            return {
                ...state,
                backup,
                data,
            };
        }
        case 'ADD_TODO': {
            const backup = [...state.backup];
            backup.push(action.payload);
            const data = filter(backup, state.filterType);

            return {
                ...state,
                backup,
                data,
            };
        }
        case 'UPDATE_TODO': {
            const backup = state.backup.map(t =>
                t.id === action.payload.id ? action.payload : t,
            );
            const data = filter(backup, state.filterType);

            return {
                ...state,
                backup,
                data,
            };
        }
        case 'DELETE_TODO': {
            const backup = state.backup.filter(t => t.id !== action.payload);
            const data = filter(backup, state.filterType);

            return {
                ...state,
                backup,
                data,
            };
        }
        case 'CLEAR_COMPLETED': {
            const backup = state.backup.filter(t => !t.done);
            const data = filter(backup, state.filterType);

            return {
                ...state,
                backup,
                data,
            };
        }
        case 'SET_FILTER': {
            const data = filter(state.backup, action.payload);

            return {
                ...state,
                filterType: action.payload,
                data,
            };
        }
        case 'SET_THEME': {
            return {
                ...state,
                theme: action.payload,
            };
        }
        default:
            throw new Error('Invalid Type!');
    }
}
