rimraf và nhiều template cho htmlwebpackplugin
-----------------------------------------------------
npm i --save-dev rimraf
trong package.json tay đổi script:
clear: "rimraf ./dist/*"
prod: "npm clear && webpack -p"