import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class App extends Component {

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

    getStoriesContent = (maxStories) => {
        return (
            this.getTopStoriesIds()
            .then(topStoriesIds => {
                var promiseArray = []
                for(var i = 0; i < Math.min(topStoriesIds.length, maxStories); i++){
                    promiseArray.push(this.getStoryContent(topStoriesIds[i]))
                }
                return Promise.all(promiseArray)
            })
        )
    }

    isInteger = (value) => /^\d+$/.test(value)

    render() {

        return (
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                }}
            >
            <Terminal
            actionHandlers={{handleClose: (toggleClose) => {}}}
            msg="Bash-like UI to get latest HN top stories. Type `help` if you're lost"
            color='#93a1a1'
            backgroundColor='#073642'
            prompt='#93a1a1'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1.2em" }}
            promptSymbol="👨‍💻>"
            minimise={true}
            maximise={false}
            commands={{
                news : (args, print, runCommand) => {
                    const maxStories = (args.slice(1).length > 0 && this.isInteger(args.slice(1))) ? parseInt(args.slice(1)[0]) : 5
                    this.getStoriesContent(maxStories)
                    .then(storiesContent => {
                        for(var i = 0; i < storiesContent.length; i++){
                            print('----------------------')
                            print(`${i}: ${storiesContent[i].title}`)
                            print(`${storiesContent[i].url}`)
                        }
                        print('----------------------')
                    })
                },
                'open-github': () => window.open('https://github.com/SachaIZADI/hackernews-terminal-browser', '_blank'),
                'open-hn': () => window.open('https://news.ycombinator.com/', '_blank'),
            }}
            descriptions={{
                news: 'shows the latest HN news',
                'open-github': 'opens a new tab with the source code',
                'open-hn': 'opens a new tab on HackerNews'
            }}
            />
        </div>
    );
  }
}

export default App