let state = { count: 0 };

function createTemplate() {
    return `
        <h1>Count: <span id="count">${state.count}</span></h1>
        <button id="add-btn">Add</button>
    `;
}

function updateState(newState) {
    state = { ...state, ...newState };
    console.log('State changed:', state);
    render();
}

function handleClick() {
    updateState({ count: state.count + 1 });
}

function mountComponent() {
    render();
    document.getElementById('app').addEventListener('click', function(event) {
        if (event.target && event.target.id === 'add-btn') {
            handleClick();
        }
    });
    console.log('Component mounted');
}

function handleClick() {
    updateState({ count: state.count + 1 });
}

function render() {
    document.getElementById('app').innerHTML = createTemplate();
}

mountComponent();


