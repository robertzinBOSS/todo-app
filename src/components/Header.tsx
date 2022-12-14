import * as React from 'react';
import { context, Todo } from '../store';

function updateTheme(): string {
    const root = document.documentElement;
    const hasDark = document.documentElement.classList.contains('dark');
    const newTheme = hasDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    if (hasDark) {
        root.classList.remove('dark');
    } else {
        root.classList.add('dark');
    }

    return newTheme;
}

export function Header(): JSX.Element {
    const {
        state: { theme },
        dispatch,
    } = React.useContext(context);
    const [todo, setTodo] = React.useState<Todo>({
        id: '',
        title: '',
        done: false,
    });

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();

        if (todo.title.length !== 0) {
            dispatch({
                type: 'ADD_TODO',
                payload: { ...todo, id: Date.now().toString() },
            });
            setTodo({ id: '', title: '', done: false });
        }
    }

    return (
        <header
            className={`${
                theme === 'light'
                    ? "bg-[url('/assets/images/bg-mobile-light.jpg')] md:bg-[url('/assets/images/bg-desktop-light.jpg')]"
                    : "bg-[url('/assets/images/bg-mobile-dark.jpg')] md:bg-[url('/assets/images/bg-desktop-dark.jpg')]"
            } bg-cover px-6 pt-12 pb-14 lg:py-24`}
        >
            <div className="flex justify-between items-center md:max-w-lg md:mx-auto">
                <h1 className="text-2xl md:text-3xl uppercase tracking-[10px] font-bold text-white">
                    Todo
                </h1>
                <button
                    type="button"
                    onClick={() => {
                        const payload = updateTheme();
                        dispatch({
                            type: 'SET_THEME',
                            payload,
                        });
                    }}
                >
                    <img
                        className="w-6 h-6 cursor-pointer "
                        src={`${
                            theme === 'light'
                                ? '/assets/svgs/icon-moon.svg'
                                : '/assets/svgs/icon-sun.svg'
                        } `}
                        alt="Icon moon"
                    />
                </button>
            </div>
            <form
                onSubmit={handleSubmit}
                className="mt-10 px-5 py-3 md:px-6 md:py-5 rounded-md w-full bg-white md:max-w-lg md:mx-auto dark:bg-very-dark-desaturated-blue-dark flex items-center gap-4 "
            >
                <button
                    type="button"
                    className={`relative rounded-full w-6 h-6 border dark:border-very-dark-grayish-blue-1-dark hover:border-gradient-first dark:hover:border-gradient-second ${
                        todo.done
                            ? 'bg-gradient-to-br from-gradient-first to-gradient-second'
                            : ''
                    }`}
                    onClick={() =>
                        setTodo(prev => ({ ...prev, done: !prev.done }))
                    }
                >
                    {todo.done && (
                        <img
                            src="/assets/svgs/icon-check.svg"
                            alt="Icon check"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    )}
                </button>
                <label htmlFor="input" className="block w-full">
                    <input
                        id="input"
                        type="text"
                        placeholder="Create a new todo"
                        value={todo.title}
                        onChange={e =>
                            setTodo(prev => ({
                                ...prev,
                                title: e.target.value,
                            }))
                        }
                        className="focus:outline-none w-full bg-transparent dark:text-white text-sm md:text-base w-full"
                    />
                </label>
            </form>
        </header>
    );
}
