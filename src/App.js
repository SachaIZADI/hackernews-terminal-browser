import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    showMsg = () => 'Hello World'

    getTopStoriesIds = () => {
        return (
            fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
        )
    }

    getStoryContent = (storyId) => {
        return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())
            .then(data => ({
                title : data.title,
                type : data.type,
                url : data.url
            }))
        )
    }

    render() {
        this.getTopStoriesIds()
        .then(storyIds => {
            this.getStoryContent(storyIds[0])
            .then(data => console.log(data))
        })


        return (
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
                }}
            >
            <Terminal
            color='green'
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
                'open-google': () => window.open('https://www.google.com/', '_blank'),
                showmsg: this.showMsg,
                popup: () => alert('Terminal in React'),
                'a': () => {
                    this.getTopStoriesIds().then(data=>console.log(data))
                }
            }}
            descriptions={{
                'open-google': 'opens google.com',
                showmsg: 'shows a message',
                alert: 'alert', popup: 'alert',
                'hello': 'hello'
            }}
            msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
            />
        </div>
    );
  }
}

export default App