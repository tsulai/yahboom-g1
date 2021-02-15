# Interface for Yahboom G1 Tank Robot

This application is the UI for Yahboom G1 Tank Robot. 
Development is based on React with create-react-app.

## Total Project Scope
1. UI (this project)
2. APIs (not included in this project, require to create seperately, which is to control camera motor, server motors and LED Light Switches)
3. API URLs in json (for easy configuration, this project read api url from json file, check the format in deployment section below)

## Deployment Note for Yahboom G1 UI

## System Requirement 
1.	Node JS
2.	React JS
3.	GIT

## Install Node JS
https://nodejs.org/en/download/

## Install React JS
npm install -g create-react-app

## Install GIT
https://gitforwindows.org/

## Separate Application Require for API URL JSON
This require to set up as separate application(static site) which HTTP Response as json.
config-api.json (see attached json file format)

## Set Up Project in Machine
Get and set up project from git repository. 
Repository URL: https://github.com/tsulai/yahboom-g1.git
Open with visual studio code
Click on Source Control icon  
Click on clone repository, copy paste repository url in top bar 
Choose location(local directory path) for the project folder from git repo come in.
CMD line terminal: 
Check branches in git 
- git branch
Pull from master branch 
- git pull origin master 
All files and folders from git repository should downloaded to local.

## Configure JSON file link in App
Open file in Editor 
- Yahboom-g1 > src > App.js

Line 37:
 useEffect(() =>{
    axios.get('http://localhost/yahboomg1.api/config-api.json')
    .then(
        response => {
          dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        }
    )


## Check Project Working in Local Machine
CMD line terminal: 
Go to project folder
- cd yahboom-g1
Check project working or not
- npm start
(Web page will prompt in browser window in localhost:3000)

## Package.json
In project folder > Open package.json
Add  new line as below.
 "homepage": "http://www.yourdomainname.com/",
Just above “dependencies” : {
Save the file.

## Build the project
Go to cmd line
/ Yahboom-g1 > npm run build
This will generate “build” folder in your project folder.
These are final working app files to upload as website.

##  Upload to Site
Go to Site Manager(Website Provider Site)
Under domain name access folder > Upload and Extract the files inside build folder

##  JSON FILE FORMAT
[{
    "video" : "http://yourapiurl/video/",
    "s_Motor": {
      "v": "http://yourapiurl/servomotors/cameravertical/",
      "h": "http://yourapiurl/servomotors/camerahorizontal/"
    },
    "d_Motor": {
      "f": "http://yourapiurl/drivingmotors/forward/",
      "b": "http://yourapiurl/drivingmotors/backward/",
      "s_l": "http://yourapiurl/drivingmotors/spinleft/",
      "s_r": "http://yourapiurl/drivingmotors/spinright/"
    },
    "rgbLed": {
      "r_true": "http://yourapiurl/rgbled/redon/",
      "r_false": "http://yourapiurl/rgbled/redoff/",
      "g_true": "http://yourapiurl/rgbled/greenon/",
      "g_false": "http://yourapiurl/rgbled/greenoff/",
      "b_true": "http://yourapiurl/rgbled/blueon/",
      "b_false": "http://yourapiurl/rgbled/blueoff/",
      "bl_true": "http://yourapiurl/rgbled/blinkon/",
      "bl_false": "http://yourapiurl/rgbled/blinkoff/"
    }
  }
]
