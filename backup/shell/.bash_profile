export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:/Users/ym/Library/Android/sdk/platform-tools
export GOPATH=$HOME/go
export PATH=$HOME/bin:$GOPATH/bin:$PATH
export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
export RUST_PATH=/Users/ym/.cargo/bin

alias cn="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

alias sql='/Applications/MAMP/Library/bin/mysql -u root -p'
alias cd-cloud='~/Library/Mobile\ Documents/com\~apple\~CloudDocs/setting/'
alias aff='/Applications/Affinity\ Designer\ Beta.app/Contents/MacOS/Affinity\ Designer\ Beta '
alias st='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'
alias kn='pkill node'
alias ns='npm start'
alias nb='npm run build'


alias cd-st='cd ~/Library/Application\ Support/Sublime\ Text\ 3/'
alias cd-code='cd ~/Library/Application\ Support/Code/'
alias antd,='npm install antd babel-plugin-import webpack --save'
alias chrome='open -a "/Applications/Google Chrome.app"'

# Setting PATH for Python 3.6
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH
