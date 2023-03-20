# Generate-a-New-Ethereum-Address-in-JavaScript


Generating an Ethereum address in JavaScript​
Our first step here will be to check if node.js is installed on the system. To do so, copy-paste the following in your terminal/cmd:

$ node -v

If not installed, you can download the LTS version of NodeJS from the official website.

If node.js is properly installed, let’s add the ethers.js library using npm (Node Package Manager, a part of node.js).

$ npm i ethers

The most common issue at this step is an internal failure with `node-gyp.` You can follow node-gyp installation instructions here.

Note: You will need to have your python version match one of the compatible versions listed in the instructions above if you encounter the node-gyp issue. 
Another common issue is a stale cache; clear your npm cache by entering the following command:

$ npm cache clean

If ethers.js is successfully installed, let’s proceed with creating an Ethereum address.

Create a file named address.js, which will be a short script to create a random private key and an Ethereum address from that key, copy-paste the following in your address.js file:
