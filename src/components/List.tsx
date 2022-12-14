import * as React from 'react';
import { context } from '../store';
import { Item } from './Item';
import { FooterButtons } from './Footer';

export function List(): JSX.Element {
    const {
        state: { data },
        dispatch,
    } = React.useContext(context);
    const itemsLeft = data.filter(t => !t.done).length;

    return (
        <div className="bg-white dark:bg-very-dark-desaturated-blue-dark mx-6 -mt-8 lg:-mt-16 rounded-md shadow-lg md:max-w-lg md:mx-auto">
            <ul>
                {data.map(t => (
                    <Item key={t.id} todo={t} />
                ))}
            </ul>
            <div className="flex justify-between items-center p-4 md:px-6 text-dark-grayish-blue-light dark:text-dark-grayish-blue-dark text-sm">
                <p className="text-sm">{itemsLeft} items left</p>
                <div className="hidden md:block">
                    <FooterButtons />
                </div>
                <button
                    type="button"
                    onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
                    className="dark:hover:text-light-grayish-blue-hover-dark"
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
}
