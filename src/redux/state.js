let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey! What\'s up bro?', likesCount: 41},
                {id: 2, message: 'Hello world!', likesCount: 5},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Joe'},
                {id: 4, name: 'Joseph'},
                {id: 5, name: 'Mike'},
                {id: 6, name: 'Bob'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are u?'},
                {id: 3, message: 'What\'s up?'},
            ],
        },
    },
    _callSubscriber() {
        console.log('rerender');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}


export default store;
window.store = store;