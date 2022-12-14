import * as React from 'react';
import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Footer, Header, List } from './components';
import { context } from './store';

export default function App(): JSX.Element {
    const {
        state: { backup },
        dispatch,
    } = React.useContext(context);

    function handleDragEnd(e: DragEndEvent): void {
        const { active, over } = e;

        if (active.id !== over?.id) {
            const activeIndex = backup.findIndex(t => t.id === active.id);
            const overIndex = backup.findIndex(t => t.id === over!.id);
            dispatch({
                type: 'SET_TODOS',
                payload: arrayMove(backup, activeIndex, overIndex),
            });
        }
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            /* eslint-disable-next-line react/jsx-no-bind */
            onDragEnd={handleDragEnd}
        >
            <Header />
            <SortableContext
                items={backup}
                strategy={verticalListSortingStrategy}
            >
                <List />
            </SortableContext>
            <Footer />
        </DndContext>
    );
}
