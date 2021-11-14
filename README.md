# Melody

Search music from JioSaavn.

<img src="public\showcase.gif">

## !Important (Read before forking)

This project is built using [Unofical JioSaavnAPI API](https://github.com/cyberboysumanjay/JioSaavnAPI) that possibly violates the Terms and Condition of JioSaavn.
This project was only built for learning purposes and nothing else.
If you do fork this project, please make sure you read the music license of JioSaavn.

(This project may not work if the underlying API is down.)

### How to use

1. Install npm and python dependencies.

```shell
npm Install
cd data/api
pip install -r requirements.txt
```

2. Run [app.py](data\api\app.py) located in the `root\data\api` directory of this project to start the api server.
3. Start nextjs server.

### Features to come

- [ ] Audio Player
- [ ] Embed meta data before music downloads ( album art, album, artist, etc)
- [ ] Download all the music from playlist
- [ ] UI Enhancements

### UseFul Resources

- [Custom Audio Player in React](https://www.youtube.com/watch?v=sqpg1qzJCGQ&ab_channel=SelfTeachMe) : [Repo](https://github.com/ahaywood/compressedfm/blob/master/nextjs/src/modules/shared/components/AudioPlayer/WaveformPlayer.js#L48)
- Sidebar : [Repo](https://github.com/JacobParis/sliding-sidebar)
- Range Slider :[Codepen](https://codepen.io/brandonmcconnell/pen/oJBVQW?editors=1100)
- [Animations](https://github.com/saviomartin/codehouse)

### UI Inspirations

- [Responsive Social Media Website ](https://github.com/egattor/responsive-social-media-with-theme-customization)
- [Sidebar](https://play.tailwindcss.com/qXPOMc0BBl)
- [Flowbite](https://flowbite.com/)

### Built using

- NextJs
- TailwindCss
- [Unofical JioSaavnAPI](https://github.com/cyberboysumanjay/JioSaavnAPI)

### Credits

- [Public APIs](https://github.com/public-apis/public-apis)
- [Unofficial JioSaavnAPI](https://github.com/cyberboysumanjay/JioSaavnAPI)
