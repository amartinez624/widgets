import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: "Who is Alex Martinez?",
        content: "Alex Martinez is a software engineer."
    },
    {
        title: "Does Alex know React?",
        content: "Yeah, you're looking at it right now."
    },
    {
        title: "Could Alex think of another blurb here?",
        content: "No he could not."
    }
];

const options = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Light Blue",
        value: "blue"
    },
    {
        label: "Dark Green",
        value: "green"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}