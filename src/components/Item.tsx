import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { context, Todo } from '../store';

type ItemProps = {
    todo: Todo;
};

export function Item({ todo }: ItemProps): JSX.Element {
    const { dispatch } = React.useContext(context);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: todo.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li
            ref={setNodeRef}
            style={style}
            className={`p-4 z-50 md:px-6 md:py-5 flex items-center justify-between dark:text-very-light-gray-light border-b border-very-light-grayish-blue-light dark:border-very-dark-grayish-blue-2-dark group ${
                isDragging
                    ? 'bg-white dark:bg-very-dark-desaturated-blue-dark rounded-lg shadow-lg border-none'
                    : ''
            }`}
        >
            <span className="flex items-center gap-4">
                <button
                    type="button"
                    className={`relative rounded-full w-6 h-6 border dark:border-very-dark-grayish-blue-1-dark hover:border-gradient-first dark:hover:border-gradient-second ${
                        todo.done
                            ? 'bg-gradient-to-br from-gradient-first to-gradient-second'
                            : ''
                    }`}
                    onClick={() => {
                        dispatch({
                            type: 'UPDATE_TODO',
                            payload: { ...todo, done: !todo.done },
                        });
                    }}
                >
                    {todo.done && (
                        <img
                            src="/assets/svgs/icon-check.svg"
                            alt="Icon check"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    )}
                </button>
                <p
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...attributes}
                    /* eslint-disable-next-line react/jsx-props-no-spreading */
                    {...listeners}
                    className={`text-sm md:text-base ${
                        todo.done
                            ? 'line-through text-light-grayish-blue-light dark:text-dark-grayish-blue-dark'
                            : ''
                    }`}
                >
                    {todo.title}
                </p>
            </span>
            <button
                type="button"
                className="hidden group-hover:inline-block"
                onClick={() =>
                    dispatch({ type: 'DELETE_TODO', payload: todo.id })
                }
            >
                <img
                    src="/assets/svgs/icon-cross.svg"
                    alt="Cross Icon"
                    className="h-4 w-4"
                />
            </button>
        </li>
    );
}
