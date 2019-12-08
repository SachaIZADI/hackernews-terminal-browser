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

    getStoriesContent = () => {
        return (
            this.getTopStoriesIds()
            .then(topStoriesIds => {
                var promiseArray = []
                for(var i = 0; i < Math.min(topStoriesIds.length,50); i++){
                    promiseArray.push(this.getStoryContent(topStoriesIds[i]))
                }
                return Promise.all(promiseArray)
            })
        )
    }


    render() {

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
                    this.getStoriesContent()
                    .then(x => console.log(x))
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