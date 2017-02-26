export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:/Users/ym/Library/Android/sdk/platform-tools
export GOPATH=$HOME/go
export PATH=$HOME/bin:$GOPATH/bin:$PATH
export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
export RUST_PATH=/Users/ym/.cargo/bin
export PATH=$PATH:/usr/local/mysql/bin
export PATH=/usr/local/mongodb/bin:$PATH

alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

#node
alias codebash='code ~/.bash_profile'
alias openbash='open ~/.bash_profile'
alias cd-cloud='~/Library/Mobile\ Documents/com\~apple\~CloudDocs/setting/'
alias st='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'
alias kn='pkill node'
alias ns='npm start'
alias nb='npm run build'
alias ndb='npm run db'
alias sv='supervisor'

#quick open
alias cd-code='cd ~/Library/Application\ Support/Code/'
alias chrome='open -a "/Applications/Google Chrome.app"'

#mongodb
#alias mongo='/usr/local/mongodb/bin/mongo'
#alias mongod='/usr/local/mongodb/bin/mongod'

#mysql
alias sql='/usr/local/mysql/bin/mysql'
alias sqlstart='sudo /usr/local/mysql/support-files/mysql.server start'
alias sqlstop='sudo /usr/local/mysql/support-files/mysql.server stop'
alias sqlsafe='sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables'
alias sqlchangepassword='UPDATE mysql.user SET authentication_string=PASSWORD('root') WHERE User='root';'
alias sqlfp='FLUSH PRIVILEGES;'
alias sql-p='mysql -u root -p'

# Setting PATH for Python 3.6
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH
