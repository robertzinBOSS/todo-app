import * as React from 'react';
import { context } from '../store';

const filters = [
    { title: 'All', type: 1 },
    { title: 'Active', type: 2 },
    { title: 'Completed', type: 3 },
];

export function FooterButtons(): JSX.Element {
    const { dispatch } = React.useContext(context);
    const [filter, setFilter] = React.useState('All');

    return (
        <div className="flex items-center justify-center gap-5 font-bold text-sm">
            {filters.map(f => (
                <button
                    key={f.type}
                    type="button"
                    className={`${
                        f.title === filter
                            ? 'text-bright-blue'
                            : 'text-dark-grayish-blue-light hover:text-very-dark-grayish-blue-light dark:text-dark-grayish-blue-dark dark:hover:text-light-grayish-blue-hover-dark'
                    }`}
                    onClick={() => {
                        setFilter(f.title);
                        dispatch({ type: 'SET_FILTER', payload: f.type });
                    }}
                >
                    {f.title}
                </button>
            ))}
        </div>
    );
}

export function Footer(): JSX.Element {
    return (
        <footer className="p-6">
            <div className="py-3.5 bg-white md:hidden dark:bg-very-dark-desaturated-blue-dark shadow-lg rounded-lg">
                <FooterButtons />
            </div>
            <p className="text-center text-very-dark-grayish-blue-1-dark my-6">
                Drag and drop to reorder list
            </p>
            <div className="text-very-dark-grayish-blue-1-dark text-center my-20">
                <p>Challenge by Frontend Mentor.</p>
                <a
                    href="https://www.frontendmentor.io/profile/robertzinBOSS"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Coded by <em className="underline">Roberto Llontop</em>
                </a>
            </div>
        </footer>
    );
}
