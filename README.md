# cohiba
test project to install, pack and roll out a basic html site with bootstrap 4 
(using yarn and webpack)

## Update

## Starting a project
if you have a yarn.lock file, like here you just have to run:
```
yarn install
```

### Prerequisites 
1. [Git](https://git-scm.com/) 

2. [Yarn](https://yarnpkg.com/)

3. [WebPack](https://webpack.js.org/)

### Installing Yarn

#### On macOS:
```
brew install yarn
``` 
To install [Homebrew](https://brew.sh/):
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### On UBUNTU
you should have installed from Mystique, if not:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

### Installing Webpack (using Yarn)
```
yarn add --dev webpack webpack-dev-server
```
to run it as a command you have to 
```
export PATH=node_modules/.bin:$PATH
```
then to compile we can run 
```
webpack
```
and we will have our compiled files in /public/dist
if we want to make it compressed and without comments 
```
webpack -p
```